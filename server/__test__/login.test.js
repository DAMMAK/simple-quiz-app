import app from "../index";
import request from "supertest";

describe("Test End Point HomePage", () => {
  it("it return response 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toEqual(200);
  });
});

describe("Login Module for test cases", () => {

  it('should return the user if the name is valid', function(done) {
      request(app)
      .post('/login')
      .send({ username: "DAMMAK", password: "Adedamola" })
      .end(function(err, res) {
        expect(res.statusCode).toEqual(200);
        done();
      });
    });

    it('fails if login details is wrong', function(done) {
      request(app)
      .post('/login')
      .send({ username: "wrongUser", password: "wrongPass" })
      .end(function(err, res) {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });

      it('fails if empty request data was sent', function(done) {
      request(app)
      .post('/login')
      .send({})
      .end(function(err, res) {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
});

// afterEach(()=>{
//   app.close();
// })