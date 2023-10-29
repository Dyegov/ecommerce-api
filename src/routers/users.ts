import { Router } from "express";
import { login, signup } from "../controllers/users";

export const usersRouter = Router();

usersRouter.post("/login", login);
usersRouter.post("/signup", signup);
