import { Module } from '@nestjs/common';
import { usersServiceFactoryProvider } from './providers/users-service.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './db/schemas/user.schema';
import { UsersRepository } from './db/repositories/users.repository';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersRepository, usersServiceFactoryProvider],
  controllers: [UsersController],
})
export class UsersModule {}
