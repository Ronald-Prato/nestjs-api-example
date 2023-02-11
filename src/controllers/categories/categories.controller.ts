import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('no-auth')
  @HttpCode(HttpStatus.UNAUTHORIZED)
  noAuth() {
    return 'jumm';
  }

  @Get()
  findAll() {
    return {
      message: 'action findAll',
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'action create',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'action update',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'action delete',
      id,
    };
  }
}
