import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from 'src/types/product.type';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductService {

    constructor(private readonly prismaService: PrismaService) {}


    // TODO: Pagination, sorting, and filtering
    findAll() {
        return this.prismaService.product.findMany();
    }

    findOne(id: number) {
        return this.prismaService.product.findUnique({ where: { id }})
    }

    create(dto: CreateProductDTO) {
        return this.prismaService.product.create({data: {
            title: dto.title,
            description: dto.description,
            price: dto.price,
            stock: dto.stock,
            image: dto.image
        }})
    }

    update(id: number, product: Product) {
        return this.prismaService.product.update({
            where: { id },
            data: {
                title: product.title,
                description: product.description,
                price: product.price,
                stock: product.stock,
                image: product.image
            }
        })
    }

    delete(id: number) {
        return this.prismaService.product.delete({ where: { id }})
    }

}
