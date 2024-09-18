import { Injectable } from '@nestjs/common';
import { CreateUserPayload, User } from 'src/types/user.type';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {

    // Database
    private users: User[] = [
        {
            id: "1",
            firstName: "Tanakorn",
            lastName: "Karode",
            // Basic authen (username, password)
            email: "tanakorn.karode@gmail.com",
            // password: "123456789",
            hashedPassword: "asdlkj;aldfjoiaeorje;w"
        }
    ]

    findAll() {
        return this.users;
    }

    findOne(id: string) {
        return this.users.find(user => user.id === id)
    }

    create(payload: CreateUserPayload) {
        const saltRounds = 10;
        const newUser: User = {
            id: (this.users.length + 1).toString(),
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            hashedPassword: bcrypt.hashSync(payload.password, saltRounds) // TODO: Danger! Must hash before storing DB
        };
        this.users.push(newUser);
        return newUser;
    }

}
