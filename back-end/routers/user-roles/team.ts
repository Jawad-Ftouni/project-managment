import express, { Request, Response } from "express";
import team from "../../models/user-roles/team";

let router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    let teamAdded = new team({
      teamName: req.body.teamName,
    });
    let result = await teamAdded.save();
    console.log(result);
    if (result) res.send("team added");
    res.send("team no added");
  } catch (e) {
    console.log(e);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    let teams = await team.find();
    if (teams) res.send(teams);
    res.send("no teams found");
  } catch (e) {
    console.log(e);
  }
});

router.delete("/", async (req: Request, res: Response) => {
  let deletedTeams = await team.deleteMany();
  if (deletedTeams) res.send("all teams deleted");
  res.send("cant delete any team");
});

export default router;
