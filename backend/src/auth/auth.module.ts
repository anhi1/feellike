import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
        secret: process.env.NEST_JWT_SECRET,
        signOptions: { expiresIn: '7d'}
      })

    ],    

  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
function register(arg0: { secret: string, 
  signOptions: { expiresIn: string; }; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
  throw new Error('Function not implemented.');
}

