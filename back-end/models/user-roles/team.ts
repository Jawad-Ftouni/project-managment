import mongoose from "mongoose";

let teamSchema = new mongoose.Schema({
  teamName: String,
});
let team = mongoose.model("teamMember", teamSchema);
export default team;