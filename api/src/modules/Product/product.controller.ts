import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('/products')
  getPaymentMoethod(@Res() res: Response): any {
    const productListResult = this.productService.getProductList();
    res.status(HttpStatus.OK).json(productListResult);
  }
}
