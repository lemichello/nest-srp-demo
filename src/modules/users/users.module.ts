import { Module } from '@nestjs/common';
import { usersServiceFactoryProvider } from './providers/users-service.provider';

@Module({
  providers: [usersServiceFactoryProvider],
})
export class UsersModule {}
