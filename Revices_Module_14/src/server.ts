import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

const port = 5000;

const uri = "mongodb://localhost:27017/todosDB";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const serverConnection = async () => {
  await client.connect();
  await client.db("todosDB").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};
serverConnection();
