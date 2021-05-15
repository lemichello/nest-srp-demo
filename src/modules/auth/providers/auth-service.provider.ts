import { FactoryProvider } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { AUTH_SERVICE } from '../auth.constants';

export const authServiceFactoryProvider: FactoryProvider<AuthService> = {
  provide: AUTH_SERVICE,
  useFactory: () => {
    return new AuthService();
  },
};
