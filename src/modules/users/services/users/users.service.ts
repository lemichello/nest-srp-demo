import { IUsersService } from '../../interfaces/users-service.interface';
import { IRepository } from '../../../../common/abstract/repository.interface';
import { User } from '../../db/schemas/user.schema';

export class UsersService implements IUsersService {
  constructor(private readonly usersRepository: IRepository<User>) {}

  public async create(data: Partial<User>): Promise<User> {
    return this.usersRepository.create(data);
  }
}
