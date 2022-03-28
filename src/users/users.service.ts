/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ArticleService } from 'src/article/article.service';
import { Model, Types } from 'mongoose';
import data from '../data/data.static';
import {
  Users,
  CreateUserInput,
  UserDocument,
  UpdateUserInput,
} from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UserDocument>,
  ) {}

  async getAll() {
    return this.userModel.find().lean();
  }

  async GetOneById(args) {
    return this.userModel.findById(args).lean();
  }

  async GetArticle(args) {
    return this.userModel.find({ article: args }); // get id from article's resolver and filter data
    // console.log(args)
  }

  async createUser(newUser: CreateUserInput) {
    let user = new this.userModel();
    user.name = newUser.name;
    user.articleId = newUser.articleId.toString();
    user.articleId.toString();

    return user.save();
  }

  async softRemove(id: string) {
    // console.log(await (await this.userModel.deleteOne({ _id: id})).acknowledged)
    return (await (await this.userModel.deleteOne({ _id: id })).acknowledged) ==
      true
      ? 'remove success'
      : 'remove fail';
  }

  async updateUser(user: UpdateUserInput) {
    let upUser = await this.userModel.findOne({ _id: user._id });
    upUser.name = user.name;
    upUser.articleId = user.articleId;
    return upUser.save();
  }
}
