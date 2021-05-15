import { IsEmail } from 'class-validator';

export class SrpChallengeInput {
  @IsEmail()
  email: string;
}
