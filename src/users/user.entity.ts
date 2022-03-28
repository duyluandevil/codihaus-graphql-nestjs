/* eslint-disable prettier/prettier */
import { Field, InputType, ObjectType, Int, ID } from '@nestjs/graphql';
import { Article } from '../article/article.entity';
import * as mongoose from 'mongoose';

//Mongoose
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = Users & mongoose.Document;



@Schema() //create Schema for MongoDB
@ObjectType() //create objecttype for Schema Graphql 
export class Users {
  @Field(() => ID) // store in schema.gql, this's what return in schema.gql
  _id: number;

  @Prop({ required: true }) 
  @Field()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Article.name })  // create rela in database
  @Field(() => Article)
  articleId: Article | string; // return object
}

export const UserSchema = SchemaFactory.createForClass(Users);

UserSchema.index({ articleId: 1 });

@InputType()
export class CreateUserInput { // get data input from client

  @Field()
  name: string;

  @Field(() => String)
  articleId: string;
}

@InputType()
export class UpdateUserInput { // get data input from client

  @Field()
  _id: string; //need id for find user to change infomation

  @Field()
  name: string;

  @Field(() => String)
  articleId: string;
}