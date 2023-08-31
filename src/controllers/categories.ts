import { Request, Response } from 'express'
import { db } from '../lib/db'

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await db.category.findMany({})
    res.status(200).json(categories)
  } catch (e) {
    res.status(501).json(e)
  }
}

export const getCategory = async (req: Request, res: Response) => {
  try {
    const category = await db.category.findUnique({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(category)
  } catch (e) {
    res.status(501).json(e)
  }
}

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await db.category.create({
      data: req.body,
    })
    res.status(201).json(category)
  } catch (e) {
    res.status(501).json(e)
  }
}

export const editCategory = async (req: Request, res: Response) => {
  try {
    const category = await db.category.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    })
    res.status(200).json(category)
  } catch (e) {
    res.status(501).json(e)
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await db.category.delete({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(category)
  } catch (e) {
    res.status(501).json(e)
  }
}
