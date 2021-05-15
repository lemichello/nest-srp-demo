export interface IAuthService {
  challenge(userEmail: string): Promise<{ salt: string; B: string }>;
}
