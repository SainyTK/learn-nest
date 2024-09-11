import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// Get, Post, Put/Patch, Delete
@Controller()
export class AppController {

  // Dependency Injection (DI)
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  test(): string {
    return this.appService.getTestMessage();
  }

  @Post()
  create(): string {
    return this.appService.createSomething();
  }
  
}