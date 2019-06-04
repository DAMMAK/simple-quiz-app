import request from "supertest";
import app from "../index";
export function post(url, body) {
  const httpRequest = request(app).post(url);
  httpRequest.send(body);
  //   httpRequest.set("Accept", "application/json");
  httpRequest.set("Origin", "http://localhost:5000");
  return httpRequest;
}
