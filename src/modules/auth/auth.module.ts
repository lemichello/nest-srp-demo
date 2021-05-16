import { Module } from '@nestjs/common';
import { authServiceFactoryProvider } from './providers/auth-service.provider';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth/auth.controller';
import { srpServiceFactoryProvider } from './providers/srp-service.provider';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import { jwtServiceFactoryProvider } from './providers/jwt-service.provider';
import { PassportModule } from '@nestjs/passport';
import { ClientJwtStrategy } from './jwt-strategies/client-jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'clientJwt' }),
    RedisCacheModule,
    UsersModule,
  ],
  providers: [
    ClientJwtStrategy,
    authServiceFactoryProvider,
    srpServiceFactoryProvider,
    jwtServiceFactoryProvider,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
