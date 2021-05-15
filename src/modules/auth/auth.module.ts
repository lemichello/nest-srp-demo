import { Module } from '@nestjs/common';
import { authServiceFactoryProvider } from './providers/auth-service.provider';

@Module({
  providers: [authServiceFactoryProvider],
})
export class AuthModule {}
