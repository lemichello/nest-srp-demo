import {
  ConditionsClause,
  IRepository,
} from '../../../../common/abstract/repository.interface';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersRepository implements IRepository<User> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).lean().exec();
  }

  findOne(conditions: ConditionsClause<User>): Promise<User | null> {
    return this.userModel.findOne(conditions).lean().exec();
  }

  create(data: Partial<User>): Promise<User> {
    return this.userModel.create(data);
  }
}
