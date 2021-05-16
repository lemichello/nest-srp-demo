import { Module } from '@nestjs/common';
import { authServiceFactoryProvider } from './providers/auth-service.provider';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth/auth.controller';
import { srpServiceFactoryProvider } from './providers/srp-service.provider';

@Module({
  imports: [UsersModule],
  providers: [authServiceFactoryProvider, srpServiceFactoryProvider],
  controllers: [AuthController],
})
export class AuthModule {}
