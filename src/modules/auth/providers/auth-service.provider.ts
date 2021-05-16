import { CACHE_MANAGER, FactoryProvider } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { AUTH_SERVICE, SRP_SERVICE } from '../auth.constants';
import { USERS_SERVICE } from '../../users/users.constants';
import { IUsersService } from '../../users/interfaces/users-service.interface';
import { ISrpService } from '../interfaces/srp-service.interface';
import { Cache } from 'cache-manager';

export const authServiceFactoryProvider: FactoryProvider<AuthService> = {
  provide: AUTH_SERVICE,
  useFactory: (
    usersService: IUsersService,
    srpService: ISrpService,
    cacheManager: Cache,
  ) => {
    return new AuthService(usersService, srpService, cacheManager);
  },
  inject: [USERS_SERVICE, SRP_SERVICE, CACHE_MANAGER],
};
