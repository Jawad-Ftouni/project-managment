import employee from "../../models/user-roles/employee";
import express, { Request, Response } from "express";

let router = express.Router();

router.post("/:id", async (req: Request, res: Response) => {
  try {
    let employeeAdded = new employee({
      employeeName: req.body.employeeName,
      employeeCode: req.body.employeeCode,
      userAccountId: req.params.id,
    });
    let results = await employeeAdded.save();
    console.log(results);
    if (results) res.send("employee added");
    res.send("cant add employee");
  } catch (e) {
    console.log(e);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    let employees = await employee.find();
    if (employees) res.send(employees);
    res.send("no employees found");
  } catch (e) {
    console.log(e);
  }
});

export default router;
