import { Router } from "express";
import { login, signup } from "../controllers/users";

export const usersRouter = Router();

usersRouter.get("/", login);
usersRouter.post("/", signup);
