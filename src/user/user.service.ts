import { Injectable } from '@nestjs/common';
import { CreateUserPayload, User } from 'src/types/user.type';

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

    findByEmail(email: string) {
        return this.users.find(user => user.email === email);
    }

    create(payload: CreateUserPayload) {
        const newUser: User = {
            id: (this.users.length + 1).toString(),
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            hashedPassword: payload.hashedPassword
        };
        this.users.push(newUser);
        return newUser;
    }

}
