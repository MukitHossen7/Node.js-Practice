import express, { Application } from "express";

const app: Application = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("I do CRUD operation");
});

const serverConnection = async () => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
serverConnection();
