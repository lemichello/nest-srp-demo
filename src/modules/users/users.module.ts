import { Module } from '@nestjs/common';
import { usersServiceFactoryProvider } from './providers/users-service.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './db/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [usersServiceFactoryProvider],
})
export class UsersModule {}
