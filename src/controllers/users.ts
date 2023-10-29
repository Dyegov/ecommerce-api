import { Request, Response } from "express";
import { db } from "../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;
const saltRounds = 10;

const generateToken = (data: any) => {
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // expires in 1 hour
      data,
    },
    TOKEN_SECRET!
  );
};

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

    const userToreturn = JSON.parse(JSON.stringify(user));
    delete userToreturn.password;

    bcrypt.compare(req.body.password, user?.password!, function (err, result) {
      if (!result) {
        res.status(501).json(err);
        return;
      } else {
        res.status(200).json({ token: generateToken(userToreturn) });
      }
    });
  } catch (e) {
    res.status(501).json(e);
  }
};

export const signup = async (req: Request, res: Response) => {
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
            roleId: "653e8064ec4adc0909202459", // Role Id Administrator so Teacher can work with the app
          },
          include: { role: true },
        });

        const userToreturn = JSON.parse(JSON.stringify(user));
        delete userToreturn.password;

        res.status(201).json({ token: generateToken(userToreturn) });
      }
    });
  } catch (e) {
    res.status(501).json(e);
  }
};
