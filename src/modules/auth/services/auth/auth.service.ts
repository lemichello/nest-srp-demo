import { IAuthService } from '../../interfaces/auth-service.interface';
import { IUsersService } from '../../../users/interfaces/users-service.interface';
import { ErrorMessages } from '../../../../common/error-messages.constants';
import { ISrpService } from '../../interfaces/srp-service.interface';

export class AuthService implements IAuthService {
  constructor(
    private readonly usersService: IUsersService,
    private readonly srpService: ISrpService,
  ) {}

  async challenge(userEmail: string): Promise<{ salt: string; B: string }> {
    const user = await this.usersService.findOne({ email: userEmail });

    if (!user) {
      throw new Error(ErrorMessages.NOT_FOUND_USER.msg);
    }

    const { salt, verifier } = user;
    const ephemeralKeys = this.srpService.generateEphemeralKeys(verifier);

    return { salt, B: ephemeralKeys.public };
  }
}
