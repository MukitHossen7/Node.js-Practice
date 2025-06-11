import express, { Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
  res.send("I do CRUD operation");
});

export default app;
