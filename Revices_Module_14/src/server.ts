import app from "./app";

const port = 5000;

const serverConnection = () => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};
serverConnection();
