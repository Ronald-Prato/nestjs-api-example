import { Injectable } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dto';
import { Product } from 'src/entities/products.entity';

@Injectable()
export class ProductsService {
  private counterId = 0;
  private products: Product[] = [
    {
      id: 0,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 10,
      image: 'sss',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: CreateProductDTO) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: UpdateProductDTO) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    this.products[index] = { ...this.products[index], ...payload };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    this.products.splice(index, 1);
    return true;
  }
}
