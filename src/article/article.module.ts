import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';
import { UsersService } from '../users/users.service'; 
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from 'src/users/user.entity';
import { Article, ArticleSchema } from './article.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UserSchema}, 
      { name: Article.name, schema: ArticleSchema}
    ]),
  ],
  providers: [ArticleService, ArticleResolver, UsersService],
  exports: [ArticleService]
})
export class ArticleModule {}
