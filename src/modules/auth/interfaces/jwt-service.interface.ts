export interface IJwtService {
  generateAccessToken(payload: Record<string, any>): string;
}
