import { Schema, model } from 'mongoose';
import { OrderType } from './order.interface';

const orderSchema = new Schema<OrderType>({
  email: {
    type: String,
    required: [true, 'Email is required.'],
  },
  productId: {
    type: String,
    required: [true, 'Product ID is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
  },
  quantity: {
    type: Number,
    default: 1,
    required: [true, 'Quantity is required.'],
  },
});

const OrderModel = model<OrderType>('Order', orderSchema);

export default OrderModel;
