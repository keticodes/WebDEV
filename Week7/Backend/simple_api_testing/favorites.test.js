const { request, expect } = require("./config");

describe("Favorites API", function () {
  describe("POST /favorites", function () {
    describe("when creating a favorite", function () {
      it("should require authentication", async function () {
        const response = await request.post("/favorites").send({
          airport_id: "YBR",
          note: "Going to Canada",
        });

        expect(response.status).to.eql(401);
      });

      it("should allow a user to create a favorite airport", async function () {
        const postResponse = await request
          .post("/favorites")
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
          .send({
            airport_id: "YBR",
            note: "Going to Canada",
          });

        expect(postResponse.status).to.eql(201);
        expect(postResponse.body.data.attributes.airport.name).to.eql(
          "Brandon Municipal Airport"
        );
        expect(postResponse.body.data.attributes.note).to.eql("Going to Canada");

        const favoriteId = postResponse.body.data.id;

        const putResponse = await request
          .put(`/favorites/${favoriteId}`)
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
          .send({
            note: "My usual layover when visiting family and friends",
          });

        expect(putResponse.status).to.eql(200);
        expect(putResponse.body.data.attributes.note).to.eql(
          "My usual layover when visiting family and friends"
        );

        const deleteResponse = await request
          .delete(`/favorites/${favoriteId}`)
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

        expect(deleteResponse.status).to.eql(204);

        const getResponse = await request
          .get(`/favorites/${favoriteId}`)
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

        expect(getResponse.status).to.eql(404);
      });
    });
  });
});
