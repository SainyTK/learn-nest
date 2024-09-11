import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTestMessage(): string {
    return "This is a test message";
  }

  createSomething(): string {
    return "Creating something";
  }
}

// cli = command line interface
// g = generate

// nest g resource product => module, service, controller of product