import { IsEmail, IsString } from 'class-validator';

export class AuthenticateInput {
  @IsString()
  clientEphemeralPublic: string;

  @IsString()
  clientProof: string;

  @IsEmail()
  email: string;
}
