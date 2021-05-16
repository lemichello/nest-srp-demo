import { Ephemeral, Session } from 'secure-remote-password/server';

export interface ISrpService {
  generateEphemeralKeys(verifier: string): Ephemeral;

  generateServerSession(data: {
    secretEphemeral: string;
    clientPublicEphemeral: string;
    salt: string;
    username: string;
    verifier: string;
    clientProof: string;
  }): Session;
}
