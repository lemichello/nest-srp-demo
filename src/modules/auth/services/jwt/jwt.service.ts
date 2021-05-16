import { IJwtService } from '../../interfaces/jwt-service.interface';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

export class JwtService implements IJwtService {
  constructor(private readonly configService: ConfigService) {}

  generateAccessToken(payload: Record<string, any>): string {
    return sign(payload, this.configService.get('JWT_SECRET') as string, {
      issuer: 'srp-demo',
      expiresIn: '1h',
    });
  }
}
