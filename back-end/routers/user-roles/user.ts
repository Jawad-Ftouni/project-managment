import express, { Request, Response } from "express";
import user from "../../models/user-roles/user";
let router = express.Router();

router.post("/adduser", async (req: Request, res: Response) => {
  try {
    let userAdded = new user({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      isProjectManager: req.body.isProjectManager,
    });

    let result = await userAdded.save();
    console.log(result);
    if (result) res.send("user added");
    res.send("user not added");
  } catch (e) {
    console.log("cant add user" + e);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    let users = await user.find();
    if (users) res.send(users);
    res.send("cant get users");
  } catch (e) {
    console.log(e);
  }
});

export default router;
