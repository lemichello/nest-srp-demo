import { User } from '../db/schemas/user.schema';

export interface IUsersService {
  create(data: Partial<User>): Promise<User>;
}
