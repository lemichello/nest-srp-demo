import { Module } from '@nestjs/common';
import { usersServiceFactoryProvider } from './providers/users-service.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './db/schemas/user.schema';
import { UsersRepository } from './db/repositories/users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersRepository, usersServiceFactoryProvider],
})
export class UsersModule {}
