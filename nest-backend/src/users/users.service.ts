import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';
import { UserSchemaClass } from 'src/schema/user.schema';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel("Users") private userModel: Model<UserSchemaClass>
  ) { }

  async createUser(user_dto: CreateUserDto) {
    const newUser = await this.userModel.create(user_dto);
    return newUser
  }

  async getAllUsers() {
    const users = await this.userModel.find({}, { password: 0, create_at: 0, email: 0 });
    return users;
  }

  async getOneUsers(id: string) {
    const users = await this.userModel.findById(id, { password: 0, create_at: 0, email: 0 });
    return users;
  }
}
