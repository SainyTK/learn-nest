import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/types/product.type';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Product[] {
    return this.productService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Product {
    return this.productService.findOne(+id);
  }

  @Post()
  create(@Body() product: Product): Product {
    return this.productService.create(product);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() product: Product): Product {
    return this.productService.update(+id, product);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string): void {
    return this.productService.delete(+id);
  }

}
