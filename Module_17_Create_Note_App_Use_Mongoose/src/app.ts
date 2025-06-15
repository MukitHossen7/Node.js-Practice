import express, { Application, Request, Response } from "express";
import { noteRouter } from "./routers/notes.routes";

const app: Application = express();

//middleware to parse JSON bodies
app.use(express.json());

//routers
app.use("/notes", noteRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("I do Note App using Mongoose");
});

export default app;
