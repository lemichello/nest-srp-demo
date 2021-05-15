import { IUsersService } from '../../interfaces/users-service.interface';
import {
  ConditionsClause,
  IRepository,
} from '../../../../common/abstract/repository.interface';
import { User } from '../../db/schemas/user.schema';

export class UsersService implements IUsersService {
  constructor(private readonly usersRepository: IRepository<User>) {}

  public async create(data: Partial<User>): Promise<User> {
    return this.usersRepository.create(data);
  }

  findOne(conditions: ConditionsClause<User>): Promise<User | null> {
    return this.usersRepository.findOne(conditions);
  }
}
