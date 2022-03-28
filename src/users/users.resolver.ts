/* eslint-disable prettier/prettier */
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { ArticleService } from '../article/article.service';
import { CreateUserInput, UpdateUserInput, Users } from './user.entity';
import { Article } from '../article/article.entity';

//This file will create endpoint to return data from api

@Resolver(() => Users)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private articleService: ArticleService,
  ) {}

  // eslint-disable-next-line prettier/prettier
  @Query(() => [Users]) // the query return array of User
  async users() { // Query name
    return await this.usersService.getAll(); //Resolve the query
  }

  @Query(() => Users) // change it, problem fix 1 user to array of user
  async user(@Args('id') _id: string) { // what req send args to find 1 user
    return await this.usersService.GetOneById(_id);
  }

  //Change to 1 Query user(@Args), if @args is null, return all with count of user

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

//After write code for Query, Mutation, i have to write service for logic
