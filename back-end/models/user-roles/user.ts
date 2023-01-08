import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  isProjectManager: Boolean,
  registrationTime: {
    type: Date,
    default: Date.now,
  },
});
let user = mongoose.model("user", userSchema);
export default user;
