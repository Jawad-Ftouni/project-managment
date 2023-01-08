import mongoose, { Schema } from "mongoose";
let employeeSchema = new mongoose.Schema({
  employeeCode: String,
  employeeName: String,
  userAccountId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

let employee = mongoose.model("employee", employeeSchema);

export default employee;
