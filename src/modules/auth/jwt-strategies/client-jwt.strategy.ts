import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClientJwtStrategy extends PassportStrategy(Strategy, 'clientJwt') {
  constructor(private readonly configService: ConfigService) {
    super({
      secretOrKey: configService.get('JWT_SECRET') as string,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      issuer: `srp-demo`,
    });
  }

  validate(payload: unknown): unknown {
    return payload;
  }
}
