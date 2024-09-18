import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginPayload, RegisterPayload } from 'src/types/auth.type';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  create(@Body() payload: RegisterPayload) {
    return this.authService.register(payload);
  }

  @Post('/login')
  login(@Body() payload: LoginPayload) {
    return this.authService.login(payload.email, payload.password);
  }
  
}
