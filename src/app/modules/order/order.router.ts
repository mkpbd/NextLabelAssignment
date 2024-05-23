import { Router } from 'express';
import { createOrder, getOrders } from './order.controller';

const router = Router();

router.route('/orders').post(createOrder).get(getOrders);

export const orderRouter = router;
