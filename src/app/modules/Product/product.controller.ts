import express, { Request, Response } from 'express';
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

export const ProductController = {
  createProduct,
};
