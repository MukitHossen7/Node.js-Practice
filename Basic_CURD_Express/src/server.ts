import app from "./app";

const port = 5000;

const serverConnection = async () => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
serverConnection();
