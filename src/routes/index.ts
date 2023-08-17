import express from "express";
import PingController from "../controllers/ping";
import prisma from "../db/prisma";
import UserController from "../controllers/user";

const router = express.Router();
const userController = new UserController();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.get("/users",async (_req, res) => {
    const users = await userController.getUsers();
    return res.send(users);
})

router.post("/users", async(req, res) => {
    const user = await userController.postUser(req.body); 
    return user;
})

export default router;