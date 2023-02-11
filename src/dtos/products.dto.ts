import { PartialType } from '@nestjs/mapped-types';
import {
  IsUrl,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
