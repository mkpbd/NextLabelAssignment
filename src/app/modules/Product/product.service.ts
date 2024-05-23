import Product from './Iproduct.interface';
import productModel from './product.model';

async function createProductToDB(product: Product) {
  const result = await productModel.create(product);
  return result;
}

async function getlAllProducts() {
  const result = await productModel.find();
  return result;
}
async function getSingleProduct(productId: string) {
  //  const productId = new ObjectId(id);
  const result = await productModel.findOne({ _id: productId });
  return result;
}
async function getProdictDelete(productId: string) {
  const result = await productModel.deleteOne({ _id: productId });
  return result;
}
async function updateProduct(productId: string, proudct: Product) {
  const result = await productModel.findOneAndUpdate(
    { _id: productId },
    { $set: proudct },
    { new: true, runValidators: true },
  );
  return result;
}

export const ProductService = {
  createProductToDB,
  getlAllProducts,
  getSingleProduct,
  getProdictDelete,
  updateProduct,
};
