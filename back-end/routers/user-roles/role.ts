import employee from "../../models/user-roles/employee";
import express, { Request, Response } from "express";
import role from "../../models/user-roles/role";

let router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  let roleAdded = new role({
    roleName: req.body.roleName,
  });
  let result = await roleAdded.save();
  if (result) res.send("role added");
});

router.get("/", async (req: Request, res: Response) => {
  let roles = await role.find();
  if (roles) res.send(roles);
  res.send("no role found");
});

router.delete("/", async (req: Request, res: Response) => {
  try {
  } catch (e) {
    console.log(e);
  }
  let deletedRoles = await role.deleteMany();
  console.log(deletedRoles);
  if (deletedRoles) res.send(deletedRoles);
  res.send("cant delete roles");
});

export default router;
