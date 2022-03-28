/* eslint-disable prettier/prettier */
import { Field, InputType, ObjectType, Int, ID } from '@nestjs/graphql';
import { Article } from '../article/article.entity';
import * as mongoose from 'mongoose';

//Mongoose
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = Users & mongoose.Document;

@Schema()
@ObjectType()
export class Users {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true }) 
  @Field()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Article.name }) 
  @Field(() => Article)
  articleId: Article | string;
}

export const UserSchema = SchemaFactory.createForClass(Users);

UserSchema.index({ articleId: 1 });

@InputType()
export class CreateUserInput {

  @Field()
  name: string;

  @Field(() => String)
  articleId: string;
}

@InputType()
export class UpdateUserInput {

  @Field()
  _id: string;

  @Field()
  name: string;

  @Field(() => String)
  articleId: string;
}