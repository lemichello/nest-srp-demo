import { FactoryProvider } from '@nestjs/common';
import { SrpService } from '../services/srp/srp.service';
import { SRP_SERVICE } from '../auth.constants';

export const srpServiceFactoryProvider: FactoryProvider<SrpService> = {
  provide: SRP_SERVICE,
  useFactory: () => {
    return new SrpService();
  },
};
