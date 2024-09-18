import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterPayload } from 'src/types/auth.type';
import { CreateUserPayload } from 'src/types/user.type';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userSerivce: UserService, private jwtService: JwtService) {}

    register(payload: RegisterPayload) {
        const saltRounds = 10;
        const newUser: CreateUserPayload = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            hashedPassword: bcrypt.hashSync(payload.password, saltRounds)
        };
        return this.userSerivce.create(newUser);
    }

    async login(email: string, password: string) {
        const user = this.userSerivce.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException();
        } else {
            const isValidPassword = bcrypt.compareSync(password, user.hashedPassword);
            if (!isValidPassword) {
                throw new UnauthorizedException();
            } else {
                return {
                    accessToken: await this.jwtService.signAsync(user),
                }
            }
        }
    }

}
