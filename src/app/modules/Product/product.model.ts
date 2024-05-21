import { Schema, model } from 'mongoose';
import Product from './Iproduct.interface';

// Define the mongoose schema
const productSchema: Schema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  variants: [
    {
      type: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

// Define and export the Product model
const ProductModel = model<Product>('Product', productSchema);

export default ProductModel;
