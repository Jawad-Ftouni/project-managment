import express from "express";
import user from "./routers/user-roles/user";
import employee from "./routers/user-roles/employee";
import team from "./routers/user-roles/team";
import role from "./routers/user-roles/role";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
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
app.use(bodyParser.json());
app.use("/api/users", user);
app.use("/api/employees", employee);
app.use("/api/teams", team);
app.use("/api/roles", role);
