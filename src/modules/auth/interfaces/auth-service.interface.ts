export interface IAuthService {
  challenge(userEmail: string): Promise<{ salt: string; B: string }>;

  authenticate(
    clientEphemeralPublic: string,
    clientProof: string,
    userEmail: string,
  ): Promise<{ proof: string }>;
}
