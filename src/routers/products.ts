import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
} from '../controllers/products'

export const productsRouter = Router()

productsRouter.get('/', getProducts)
productsRouter.get('/:id', getProduct)
productsRouter.post('/', createProduct)
productsRouter.put('/:id', editProduct)
productsRouter.delete('/:id', deleteProduct)
