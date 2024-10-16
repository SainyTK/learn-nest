import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserPayload, User } from 'src/types/user.type';

@Injectable()
export class UserService {

    constructor(private readonly prismaService: PrismaService) {}

    findAll() {
        return this.prismaService.user.findMany();
    }

    findOne(id: string) {
        return this.prismaService.user.findUnique({ where: { id }})
    }

    findByEmail(email: string) {
        return this.prismaService.user.findUnique({ where: { email }})
    }

    async create(payload: CreateUserPayload) {
        const user = await this.findByEmail(payload.email);
        if (user) {
            throw new BadRequestException('User already exists')
        }
        
        return this.prismaService.user.create({
            data: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                hashedPassword: payload.hashedPassword
            }
        })
    }

}
