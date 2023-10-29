import { Request, Response } from "express";
import { db } from "../lib/db";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const login = async (req: Request, res: Response) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
      include: { role: true },
    });

    if (!user) {
      res.status(401).json({ error: "User does not exist" });
      return;
    }

    bcrypt.compare(req.body.password, user?.password!, function (err, result) {
      if (!result) {
        res.status(501).json(err);
        return;
      } else {
        res.status(200).json(user);
      }
    });
  } catch (e) {
    res.status(501).json(e);
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        res.status(501).json(err);
        return;
      } else {
        const user = await db.user.create({
          data: {
            email: req.body.email,
            password: hash,
            roleId: "653e806bec4adc090920245d", // Role Id for User
          },
          include: { role: true },
        });
        res.status(201).json(user);
      }
    });
  } catch (e) {
    res.status(501).json(e);
  }
};
