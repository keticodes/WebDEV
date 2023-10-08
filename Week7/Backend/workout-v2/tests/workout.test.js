const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../App");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const signUpResponse = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = signUpResponse.body.token;
});

describe("Workout API", () => {
  describe("when there are initially some workouts saved", () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      const createWorkoutsResponse = await api
        .post("/api/workouts")
        .set("Authorization", `Bearer ${token}`)
        .send(workouts[0])
        .send(workouts[1]);
    });

    test("should return workouts as JSON", async () => {
      await api
        .get("/api/workouts")
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    test("should add a new workout successfully", async () => {
      const newWorkout = {
        title: "testworkout",
        reps: 10,
        load: 100,
      };

      await api
        .post("/api/workouts")
        .set("Authorization", `Bearer ${token}`)
        .send(newWorkout)
        .expect(201);
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
