import { IAuthService } from '../../interfaces/auth-service.interface';
import { IUsersService } from '../../../users/interfaces/users-service.interface';
import { ErrorMessages } from '../../../../common/error-messages.constants';
import * as srp from 'secure-remote-password/server';

export class AuthService implements IAuthService {
  constructor(private readonly usersService: IUsersService) {}

  async challenge(userEmail: string): Promise<{ salt: string; B: string }> {
    const user = await this.usersService.findOne({ email: userEmail });

    if (!user) {
      throw new Error(ErrorMessages.NOT_FOUND_USER.msg);
    }

    const { salt, verifier } = user;
    const serverEphemeral = srp.generateEphemeral(verifier);

    return { salt, B: serverEphemeral.public };
  }
}
