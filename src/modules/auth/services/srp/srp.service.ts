import { Ephemeral, generateEphemeral } from 'secure-remote-password/server';
import { ISrpService } from '../../interfaces/srp-service.interface';

export class SrpService implements ISrpService {
  public generateEphemeralKeys(verifier: string): Ephemeral {
    return generateEphemeral(verifier);
  }
}
