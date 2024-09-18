import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config';
import { AuthGuard } from './auth.guard';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    // {
    //   provide: 'AUTH_GUARD',
    //   useClass: AuthGuard,
    // },
  ],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: config.jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
