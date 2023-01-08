import employee from "../../models/user-roles/employee";
import express, { Request, Response } from "express";
import teamMember from "../../models/user-roles/teamMember";

let router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    let teamMemberAdded = new teamMember({
      teamId: req.body.teamId,
      employeId: req.body.employeeId,
      roleId: req.body.roleId,
    });
    let result = await teamMemberAdded.save();
    console.log(result);
    if (teamMemberAdded) res.send("member added to team");
    res.send("cant add member to team");
  } catch (e) {
    console.log(e);
  }
});
