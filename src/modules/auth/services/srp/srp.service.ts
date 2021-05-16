import {
  deriveSession,
  Ephemeral,
  generateEphemeral,
  Session,
} from 'secure-remote-password/server';
import { ISrpService } from '../../interfaces/srp-service.interface';

export class SrpService implements ISrpService {
  public generateEphemeralKeys(verifier: string): Ephemeral {
    return generateEphemeral(verifier);
  }

  generateServerSession(credentials: {
    secretEphemeral: string;
    clientPublicEphemeral: string;
    salt: string;
    username: string;
    verifier: string;
    clientProof: string;
  }): Session {
    const {
      secretEphemeral,
      clientPublicEphemeral,
      clientProof,
      verifier,
      salt,
      username,
    } = credentials;

    return deriveSession(
      secretEphemeral,
      clientPublicEphemeral,
      salt,
      username,
      verifier,
      clientProof,
    );
  }
}
