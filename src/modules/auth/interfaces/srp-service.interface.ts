import { Ephemeral } from 'secure-remote-password/server';

export interface ISrpService {
  generateEphemeralKeys(verifier: string): Ephemeral;
}
