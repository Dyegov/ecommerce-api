import { Router } from 'express'
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategories,
  getCategory,
} from '../controllers/categories'

export const categoriesRouter = Router()

categoriesRouter.get('/', getCategories)
categoriesRouter.get('/:id', getCategory)
categoriesRouter.post('/', createCategory)
categoriesRouter.put('/:id', editCategory)
categoriesRouter.delete('/:id', deleteCategory)
