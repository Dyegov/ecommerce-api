import { Request, Response } from "express";
import { db } from "../lib/db";

export const getPurchases = async (req: Request, res: Response) => {
  try {
    const purchases = await db.purchase.findMany({});
    res.status(200).json(purchases);
  } catch (e) {
    res.status(501).json(e);
  }
};

export const createPurchase = async (req: Request, res: Response) => {
  try {
    const purchase = await db.purchase.create({
      data: req.body,
    });
    res.status(201).json(purchase);
  } catch (e) {
    res.status(501).json(e);
  }
};

export const editPurchase = async (req: Request, res: Response) => {
  try {
    const purchase = await db.purchase.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.status(200).json(purchase);
  } catch (e) {
    res.status(501).json(e);
  }
};

export const deletePurchase = async (req: Request, res: Response) => {
  try {
    const purchase = await db.purchase.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(purchase);
  } catch (e) {
    res.status(501).json(e);
  }
};
