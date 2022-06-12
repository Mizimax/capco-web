import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('/products')
  getProductList(
    @Query('search') search: string,
    @Query('filter') filter: string,
    @Res() res: Response,
  ): any {
    const filterList = filter ? filter.split(',') : undefined;
    const productListResult = this.productService.getProductList({
      search,
      filter: filterList,
    });
    res.status(HttpStatus.OK).json(productListResult);
  }
}
