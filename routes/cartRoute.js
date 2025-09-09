import express from 'express'
import { addToCart,removeFromCart,getCart } from '../controllers/cartController.js'
import authMiddlewire from '../middleware/auth.js';
const cartRouter = express.Router();

cartRouter.post('/add',authMiddlewire,addToCart)
cartRouter.post('/remove',authMiddlewire,removeFromCart)
cartRouter.post('/get',authMiddlewire,getCart)

export default cartRouter;