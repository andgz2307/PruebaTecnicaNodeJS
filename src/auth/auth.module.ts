import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service'; // Asegúrate de que esta ruta sea correcta
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module'; // Asegúrate de que UsersModule esté correctamente importado

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Asegúrate de definir JWT_SECRET en tu archivo .env
      signOptions: { expiresIn: '60m' }, // Expiración del token
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
