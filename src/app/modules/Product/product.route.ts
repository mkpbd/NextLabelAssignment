import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getllProducts);
router.get('/products/:productId', ProductController.getSingleProduct);
router.delete('/products/:productId', ProductController.productDelete);
router.put('/products/:productId', ProductController.productUpdate);

export const productRouter = router;
