import { IsEmail, IsString } from 'class-validator';

export class RegisterUserInput {
  @IsEmail()
  email: string;

  @IsString()
  salt: string;

  @IsString()
  verifier: string;
}
