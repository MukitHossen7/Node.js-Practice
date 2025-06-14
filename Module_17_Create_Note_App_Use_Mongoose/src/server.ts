import mongoose from "mongoose";
import app from "./app";

const PORT = 5000;

const serverConnection = async () => {
  try {
    // Connect to Mongoose
    await mongoose.connect("mongodb://localhost:27017/Note_App_DB");
    console.log("Connected to MongoDB successfully");
    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the server:", error);
  }
};
serverConnection();
