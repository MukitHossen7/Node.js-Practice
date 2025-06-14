import app from "./app";

const PORT = 5000;

const serverConnection = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the server:", error);
  }
};
serverConnection();
