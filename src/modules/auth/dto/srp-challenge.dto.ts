import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SrpChallengeDto {
  @Expose()
  salt: string;

  @Expose()
  B: string;
}
