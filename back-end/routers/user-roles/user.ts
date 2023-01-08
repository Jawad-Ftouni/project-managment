import express, { Request, Response } from "express";
import { Error } from "mongoose";
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
    res.send("user added");
  } catch (e) {
    console.log(e);
  }
});

router.get("/getusers", async (req: Request, res: Response) => {
  try {
    let users = await user.find();
    if (users) res.send(users);
    res.send("cant get users");
  } catch (e) {
    console.log(e);
  }
});

export default router;
