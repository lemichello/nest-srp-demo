import { FactoryProvider } from '@nestjs/common';
import { UsersService } from '../services/users/users.service';
import { USERS_SERVICE } from '../users.constants';
import { UsersRepository } from '../db/repositories/users.repository';

export const usersServiceFactoryProvider: FactoryProvider<UsersService> = {
  provide: USERS_SERVICE,
  useFactory: (usersRepository: UsersRepository) => {
    return new UsersService(usersRepository);
  },
  inject: [UsersRepository],
};
