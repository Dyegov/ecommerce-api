import { Router } from "express";
import { login, signin } from "../controllers/users";

export const usersRouter = Router();

usersRouter.get("/", login);
usersRouter.post("/", signin);
