import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, mongodbUrl } from "./config.js";
import bookRoute from "./routes/books.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

//Inserting custom cors
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  res.send({ message: "Try using /books" });
});

app.use("/books", bookRoute);

mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("Server is Running on PORT:", PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
