import mongoose, { Schema } from "mongoose";

let teamMemberSchema = new mongoose.Schema({
  teamId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  employeId: {
    type: Schema.Types.ObjectId,
    ref: "employee",
  },
  roleId: {
    type: Schema.Types.ObjectId,
    ref: "role",
  },
});
let teamMember = mongoose.model("teamMember", teamMemberSchema);
export default teamMember;
