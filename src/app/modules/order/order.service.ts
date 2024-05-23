import { OrderType } from './order.interface';
import OrderModel from './order.model';

const createOrder = async (order: OrderType) => {
  const result = await OrderModel.create(order);
  return result;
};

const getOrders = async (queryEmail: string | undefined) => {
  const result = await OrderModel.aggregate([
    queryEmail ? { $match: { email: queryEmail } } : { $match: {} },
  ]);
  return result;
};

export const orderService = {
  createOrder,
  getOrders,
};