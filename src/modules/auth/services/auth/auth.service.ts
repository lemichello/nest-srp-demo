import { IAuthService } from '../../interfaces/auth-service.interface';
import { IUsersService } from '../../../users/interfaces/users-service.interface';
import { ErrorMessages } from '../../../../common/error-messages.constants';
import { ISrpService } from '../../interfaces/srp-service.interface';
import { Cache } from 'cache-manager';

export class AuthService implements IAuthService {
  constructor(
    private readonly usersService: IUsersService,
    private readonly srpService: ISrpService,
    private readonly cacheManager: Cache,
  ) {}

  async challenge(userEmail: string): Promise<{ salt: string; B: string }> {
    const user = await this.usersService.findOne({ email: userEmail });

    if (!user) {
      throw new Error(ErrorMessages.NOT_FOUND_USER.msg);
    }

    const { salt, verifier } = user;
    const ephemeralKeys = this.srpService.generateEphemeralKeys(verifier);

    await this.cacheManager.set(
      `srp:private-key#${user.email}`,
      ephemeralKeys.secret,
    );

    return { salt, B: ephemeralKeys.public };
  }

  async authenticate(
    clientEphemeralPublic: string,
    clientProof: string,
    userEmail: string,
  ): Promise<{ proof: string }> {
    const user = await this.usersService.findOne({ email: userEmail });

    if (!user) {
      throw new Error(ErrorMessages.NOT_FOUND_USER.msg);
    }

    const ephemeralSecretKey = await this.cacheManager.get<string>(
      `srp:private-key#${user.email}`,
    );

    if (!ephemeralSecretKey) {
      throw new Error(ErrorMessages.NOT_AUTHENTICATED.msg);
    }

    try {
      const session = this.srpService.generateServerSession({
        salt: user.salt,
        username: userEmail,
        verifier: user.verifier,
        clientProof,
        secretEphemeral: ephemeralSecretKey,
        clientPublicEphemeral: clientEphemeralPublic,
      });

      return { proof: session.proof };
    } catch (e) {
      throw new Error(ErrorMessages.INVALID_SESSION_PROOF.msg);
    }
  }
}
