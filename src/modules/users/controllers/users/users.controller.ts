import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IUsersService } from '../../interfaces/users-service.interface';
import { RegisterUserInput } from '../../inputs/register-user.input';
import { IApiResponse } from '../../../../common/abstract/api-response.interface';
import { USERS_SERVICE } from '../../users.constants';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(USERS_SERVICE) private readonly usersService: IUsersService,
  ) {}

  @Post('register')
  async registerUser(
    @Body() body: RegisterUserInput,
  ): Promise<IApiResponse<null>> {
    await this.usersService.create(body);

    return { success: true, data: null };
  }
}
