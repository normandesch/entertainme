const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {
  describe("BASE route", () => {
    it("will return successful status code", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to EntertainMe");
        done();
      });
    });
  });
});
