/* eslint-disable prettier/prettier */
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Users } from 'src/users/user.entity';

export type ArticleDocument = Article & mongoose.Document;

@Schema()
@ObjectType()
export class Article {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  categoryId: number;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' } })
  @Field(() => [Users])
  users: Users[]
}

export const ArticleSchema = SchemaFactory.createForClass(Article)