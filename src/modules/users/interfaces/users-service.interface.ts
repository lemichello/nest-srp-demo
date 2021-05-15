import { User } from '../db/schemas/user.schema';
import { ConditionsClause } from '../../../common/abstract/repository.interface';

export interface IUsersService {
  create(data: Partial<User>): Promise<User>;

  findOne(conditions: ConditionsClause<User>): Promise<User | null>;
}
