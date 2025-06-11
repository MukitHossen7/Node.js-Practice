import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb://localhost:27017/CRUD_DB";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
