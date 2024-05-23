import  { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductToDB(product);

    res.status(200).json({
      success: true,
      message: 'produt is created succssfully ',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getlAllProducts();
    res.status(200).json({
      success: true,
      message: 'produts are retrived succssfully ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: 'produts are retrived succssfully ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const productDelete = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getProdictDelete(productId);
    res.status(200).json({
      success: true,
      message: 'produts is deleted',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const productUpdate = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const result = await ProductService.updateProduct(productId, product);
    res.status(200).json({
      success: true,
      message: 'produts is updteded',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
  getllProducts,
  getSingleProduct,
  productDelete,
  productUpdate,
};
