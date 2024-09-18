import { Injectable } from '@nestjs/common';
import { RegisterPayload } from 'src/types/auth.type';
import { CreateUserPayload } from 'src/types/user.type';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

    constructor(private readonly userSerivce: UserService) {}

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

    login() {

    }

}
