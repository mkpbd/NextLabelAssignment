import Product from './Iproduct.interface';
import productModel from './product.model';

async function createProductToDB(product: Product) {
  const result = await productModel.create(product);
  return result;
}

export const ProductService = {
  createProductToDB,
};
