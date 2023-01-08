import express from "express";
import user from "./routers/user-roles/user";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

let app = express();
let PORT = process.env.PORT || 3001;
let MONGO_URL = process.env.MONGO_URL;
app.listen(PORT, () => {
  console.log("listen on port " + PORT);
});
mongoose.set("strictQuery", true);
if (MONGO_URL)
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connect to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });

app.use("/users/adduser", user);
