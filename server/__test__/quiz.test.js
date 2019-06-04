import app from "../index";
import request from "supertest";
import questions from "../db/question.json";

describe("Quiz test", () => {
  it("it return response 200", async () => {
    const res = await request(app).get("/loadQuestions");
    expect(res.status).toEqual(200);
  });

  it("it return response 200", async () => {
    const res = await request(app).get("/loadQuestions");
    expect(JSON.parse(res.text)).toEqual(questions);
  });
});
