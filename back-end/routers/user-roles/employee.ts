import employee from "../../models/user-roles/employee";
import user from "../../models/user-roles/user";
import express, { Request, Response } from "express";

let router = express.Router();

router.post("/addEmployee", async (req: Request, res: Response) => {
  let employeeAdded = new employee({
    employeeName: req.body.employeeName,
    employeeCode: req.body.employeeCode,
  });
  let results = await employeeAdded.save();
  if (results) res.send(results);
  res.send("cant add employee");
});
export default router;
