import { FactoryProvider } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { AUTH_SERVICE } from '../auth.constants';
import { USERS_SERVICE } from '../../users/users.constants';
import { IUsersService } from '../../users/interfaces/users-service.interface';

export const authServiceFactoryProvider: FactoryProvider<AuthService> = {
  provide: AUTH_SERVICE,
  useFactory: (usersService: IUsersService) => {
    return new AuthService(usersService);
  },
  inject: [USERS_SERVICE],
};
