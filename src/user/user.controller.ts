import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserPayload } from 'src/types/user.type';

@Controller('user')
export class UserController {
  // Dependency injection
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/:id') // Path params
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

}
