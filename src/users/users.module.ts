/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ArticleService } from 'src/article/article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from './user.entity';
import { Article, ArticleSchema } from 'src/article/article.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UserSchema },
      { name: Article.name, schema: ArticleSchema },
    ]),
  ],
  providers: [UsersService, UsersResolver, ArticleService],
})
export class UsersModule {}
