import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/types/product.type';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() dto: CreateProductDTO) {
    return this.productService.create(dto);
  }

  @UseGuards(AuthGuard)
  @Patch('/:id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.productService.update(+id, product);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(+id);
  }

}
