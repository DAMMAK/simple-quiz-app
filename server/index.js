import express from "express";
import bodyParser from "body-parser";
import questions from "./db/question.json";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  // res.status(200).send({ message: questions });
  // console.log(questions);
  //   console.log(res.body);
  res.status(200).send({ message: "Welcome to Quiz Application" });
});

app.post("/login", (req, res, next) => {
  //   console.log(req.body);
  const { username, password } = req.body;
  if (username === "" || password === "")
    res.status(400).send({ message: "Erorr Logging you in" });
  if (username !== "DAMMAK" || password !== "Adedamola")
    res.status(400).send({ message: "Wrong Username or Password" });
  if (username === "DAMMAK" && password === "Adedamola")
    res.status(200).send({ username: "DAMMAK", password: "Adedamola" });
});

app.get("/loadquestions", (req, res, next) => {
  res.send(questions).status(200);
});
// app.listen(5000, () => console.log("Listening to Connection using PORT 5000"));
var server = app.listen(5000, () => {
  console.log("Listening to Connection using PORT 5000");
});
export default app;
