import { FactoryProvider } from '@nestjs/common';
import { JwtService } from '../services/jwt/jwt.service';
import { JWT_SERVICE } from '../auth.constants';
import { ConfigService } from '@nestjs/config';

export const jwtServiceFactoryProvider: FactoryProvider<JwtService> = {
  provide: JWT_SERVICE,
  useFactory: (configService: ConfigService) => {
    return new JwtService(configService);
  },
  inject: [ConfigService],
};
