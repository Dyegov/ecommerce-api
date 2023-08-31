import { Request, Response } from 'express'
import { db } from '../lib/db'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await db.product.findMany({ include: { category: true } })
    res.status(200).json(products)
  } catch (e) {
    res.status(501).json(e)
  }
}

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await db.product.findUnique({
      where: {
        id: req.params.id,
      },
      include: { category: true },
    })
    res.status(200).json(product)
  } catch (e) {
    res.status(501).json(e)
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await db.product.create({
      data: req.body,
      include: { category: true },
    })
    res.status(201).json(product)
  } catch (e) {
    res.status(501).json(e)
  }
}

export const editProduct = async (req: Request, res: Response) => {
  try {
    const product = await db.product.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
      include: { category: true },
    })
    res.status(200).json(product)
  } catch (e) {
    res.status(501).json(e)
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await db.product.delete({
      where: {
        id: req.params.id,
      },
      include: { category: true },
    })
    res.status(200).json(product)
  } catch (e) {
    res.status(501).json(e)
  }
}
