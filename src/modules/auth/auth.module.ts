import { Module } from '@nestjs/common';
import { authServiceFactoryProvider } from './providers/auth-service.provider';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth/auth.controller';
import { srpServiceFactoryProvider } from './providers/srp-service.provider';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import { jwtServiceFactoryProvider } from './providers/jwt-service.provider';

@Module({
  imports: [RedisCacheModule, UsersModule],
  providers: [
    authServiceFactoryProvider,
    srpServiceFactoryProvider,
    jwtServiceFactoryProvider,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
