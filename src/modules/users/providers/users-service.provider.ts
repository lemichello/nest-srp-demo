import { FactoryProvider } from '@nestjs/common';
import { UsersService } from '../services/users/users.service';
import { USERS_SERVICE } from '../users.constants';

export const usersServiceFactoryProvider: FactoryProvider<UsersService> = {
  provide: USERS_SERVICE,
  useFactory: () => {
    return new UsersService();
  },
};
