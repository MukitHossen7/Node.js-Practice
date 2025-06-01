import app from "./app";
import { client } from "./db/mongodb";

const port = 5000;

const serverConnection = async () => {
  await client.connect();
  await client.db("todosDB").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};
serverConnection();
