import { Router } from "express";
import {
  getPurchases,
  createPurchase,
  editPurchase,
  deletePurchase,
} from "../controllers/purchases";

export const purchasesRouter = Router();

purchasesRouter.get("/", getPurchases);
purchasesRouter.post("/", createPurchase);
purchasesRouter.put("/:id", editPurchase);
purchasesRouter.delete("/:id", deletePurchase);
