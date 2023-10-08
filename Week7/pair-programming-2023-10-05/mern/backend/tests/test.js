const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Goal = require("../models/goalModel"); 
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "keti@mtesti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("User Registration and Login", () => {
  // Add tests for user registration and login here
  test("User registration should create a new user", async () => {
    // Your registration test logic here
  });

  test("User login should return a valid token", async () => {
    // Your login test logic here
  });
});

describe("Goal Operations", () => {
  beforeEach(async () => {
    await Goal.deleteMany({});
    await api
      .post("/api/goals")
      .set("Authorization", "bearer " + token)
      .send({ title: "Test Goal 1" })
      .send({ title: "Test Goal 2" });
  });

  test("Goals are returned as JSON", async () => {
    await api
      .get("/api/goals")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("New goal added successfully", async () => {
    const newGoal = {
      title: "New Test Goal",
    };
    await api
      .post("/api/goals")
      .set("Authorization", "bearer " + token)
      .send(newGoal)
      .expect(201);
  });

  test("A valid goal can be added", async () => {
    const newGoal = {
      title: "Valid Test Goal",
    };

    await api
      .post("/api/goals")
      .set("Authorization", "bearer " + token)
      .send(newGoal)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const response = await api.get("/api/goals");

    const contents = response.body.map((r) => r.title);

    expect(response.body).toHaveLength(3); // Update the expected length based on your initial goals
    expect(contents).toContain("Valid Test Goal");
  });

  test("Goal without a title is not added", async () => {
    const newGoal = {
      // Missing title
    };

    await api
      .post("/api/goals")
      .set("Authorization", "bearer " + token)
      .send(newGoal)
      .expect(400);

    const response = await api.get("/api/goals");

    expect(response.body).toHaveLength(2); // Update the expected length based on your initial goals
  });

  // Add more tests for updating and deleting goals here
});

afterAll(() => {
  mongoose.connection.close();
});
