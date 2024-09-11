import { Injectable } from '@nestjs/common';
import { Product } from 'src/types/product.type';

@Injectable()
export class ProductService {

    // Database
    private products: Product[] = [
        {
            id: 1,
            title: "Shirt",
            description: "This is a shirt",
            price: 100,
            stock: 10,
            image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        },
        {
            id: 2,
            title: "Pants",
            description: "This is a pants",
            price: 200,
            stock: 20,
            image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        },
        {   
            id: 3,
            title: "Shoes",
            description: "This is a shoes",
            price: 300,
            stock: 30,
            image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
    ];

    // TODO: Pagination, sorting, and filtering
    findAll(): Product[] {
        return this.products;
    }

    findOne(id: number): Product {
        return this.products.find((product) => {
            return product.id === id
        })
    }

    create(product: Product): Product {
        this.products.push(product);
        return product;
    }

    update(id: number, product: Product): Product {
        const index = this.products.findIndex(product => product.id === id);
        this.products[index] = product;
        return product;
    }

    delete(id: number): void {
        this.products = this.products.filter((product) => {
            return product.id !== id
        });
    }

}
