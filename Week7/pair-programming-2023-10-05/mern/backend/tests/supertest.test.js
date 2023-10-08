const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe ("API Tests", () => {
    if("responds with Hello for the root route", async () => {
        const response = await api.get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello");
    });

    if ("responds with goals list on the GET request /api/goals", async () => {
        const response = await api.get("/api/goals");
        expect(response.status).toBe(200);
    });

    if ("responds with users /api/users", async () => {
        const response = await api.get("/api/users");
        expect(response.status).toBe(200);




    });
});