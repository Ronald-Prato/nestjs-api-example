import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dto';

import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    const products = this.productsService.findAll();
    return products;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const product = this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post()
  create(@Body() payload: CreateProductDTO) {
    const newProduct = this.productsService.create(payload);
    return newProduct;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDTO) {
    const product = this.productsService.update(+id, payload);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const deleted = this.productsService.delete(+id);
    if (!deleted) {
      throw new NotFoundException('Product not found');
    }
    return deleted;
  }
}
