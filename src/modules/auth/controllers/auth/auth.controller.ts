import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IAuthService } from '../../interfaces/auth-service.interface';
import { AUTH_SERVICE } from '../../auth.constants';
import { IApiResponse } from '../../../../common/abstract/api-response.interface';
import { SrpChallengeDto } from '../../dto/srp-challenge.dto';
import { SrpChallengeInput } from '../../inputs/srp-challenge.input';
import { plainToClass } from 'class-transformer';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authService: IAuthService,
  ) {}

  @Post('challenge')
  async srpChallenge(
    @Body() body: SrpChallengeInput,
  ): Promise<IApiResponse<SrpChallengeDto>> {
    const { email } = body;

    const challengeResult = await this.authService.challenge(email);

    return {
      success: true,
      data: plainToClass(SrpChallengeDto, challengeResult),
    };
  }
}
