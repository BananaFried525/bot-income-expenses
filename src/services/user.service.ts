import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from 'src/db/dto/user.dto';
import { User, UserDocument } from 'src/db/schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findOne(userId: string): Promise<User> {
    return this.userModel.findOne({ userId: userId }).exec();
  }

  async update(updateUserDto: UpdateUserDto) {
    return this.userModel
      .updateOne({ userId: updateUserDto.userId }, updateUserDto)
      .exec();
  }
}
