import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { ProductValidationSchema } from './product.validation';
import { ZodError } from 'zod';
import Product from './Iproduct.interface';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;

    const productDataValidation = ProductValidationSchema.parse(product);
    const result = await ProductService.createProductToDB(
      productDataValidation,
    );

    res.status(200).json({
      success: true,
      message: 'produt is created succssfully ',
      data: result,
    });
  } catch (error) {
    // zod error handling
    if (error instanceof ZodError) {
      const validationErrors = error.errors.map(
        (err) => err.path[0] + ' ' + err.message,
      );
      res.status(400).send({
        success: false,
        message: validationErrors[0],
      });
    } else {
      // Handle other types of errors
      res.status(500).send({
        success: false,
        message: error || 'Internal server error.',
      });
    }
  }
};

const getllProducts = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query;
    const result = await ProductService.getlAllProducts(searchQuery);
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
