import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { ArticleService } from '../article/article.service';
import { CreateUserInput, UpdateUserInput, Users } from './user.entity';
import { Article } from '../article/article.entity';

@Resolver(() => Users)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private articleService: ArticleService,
  ) {}

  // eslint-disable-next-line prettier/prettier
  @Query(() => [Users])
  async users() {
    return await this.usersService.getAll();
  }

  @Query(() => Users)
  async user(@Args('id') _id: string) {
    return await this.usersService.GetOneById(_id);
  }

  @Mutation(() => Users)
  async createUser(@Args('input') user: CreateUserInput) {
    return this.usersService.createUser(user);
  }

  @Mutation(() => String)
  async removeUser(@Args('id') id: string) {
    return await this.usersService.softRemove(id);
  }

  @Mutation(() => Users)
  async updateUser(@Args('input') user: UpdateUserInput) {
    return await this.usersService.updateUser(user);
  }

  @ResolveField(() => Article)
  async article(@Parent() user: Users) {
    return this.articleService.GetOneById(user.articleId)
    // console.log(user.articleId)
  }
}
