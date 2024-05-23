import express, { Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/Product/product.route';
import { orderRouter } from './app/modules/order/order.router';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', productRouter);
app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
