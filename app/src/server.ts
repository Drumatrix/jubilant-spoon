import * as express from "express";
import { connectToDatabase } from "./services/database.service"
import { categoriesRouter } from "./routes/categories.router";

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

connectToDatabase()
  .then(() => {
    app.use("/categories", categoriesRouter);

    app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });