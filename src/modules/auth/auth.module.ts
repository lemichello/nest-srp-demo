import { Module } from '@nestjs/common';
import { authServiceFactoryProvider } from './providers/auth-service.provider';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  imports: [UsersModule],
  providers: [authServiceFactoryProvider],
  controllers: [AuthController],
})
export class AuthModule {}
