import mongoose from "mongoose";

let roleSchema = new mongoose.Schema({
  roleName: String,
});
let role = mongoose.model("role", roleSchema);
export default role;
