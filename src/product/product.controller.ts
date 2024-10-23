import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/types/product.type';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateProductDTO } from './dto/create-product.dto';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('/my-products')
  findMyProducts(@Req() req: Request) {
    return this.productService.findByUserId(req.user.id);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() dto: CreateProductDTO) {
    return this.productService.create(req.user.id, dto);
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
