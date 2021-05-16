import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { IUsersService } from '../../interfaces/users-service.interface';
import { RegisterUserInput } from '../../inputs/register-user.input';
import { IApiResponse } from '../../../../common/abstract/api-response.interface';
import { USERS_SERVICE } from '../../users.constants';
import { AuthGuard } from '@nestjs/passport';
import { IApiRequest } from '../../../../common/abstract/api-request.interface';
import { UserDto } from '../../dto/user.dto';
import { plainToClass } from 'class-transformer';

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

  @UseGuards(AuthGuard('clientJwt'))
  @Get('me')
  async getUserInfo(@Req() req: IApiRequest): Promise<IApiResponse<UserDto>> {
    const user = await this.usersService.getUserInfo(req.user.sub);

    return {
      success: true,
      data: plainToClass(UserDto, user),
    };
  }
}
