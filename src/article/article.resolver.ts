import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Users } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Article } from './article.entity';
import { ArticleService } from './article.service';

@Resolver(() => Article)
export class ArticleResolver {
    constructor(private articleService: ArticleService,
        private usersService: UsersService) {}

    @Query(() => [Article])
    async articles(){
        return await this.articleService.getAll();
    }

    @Query(() => Article)
    async article(@Args('id') id: string){
        return await this.articleService.GetOneById(id);
    }

    @ResolveField(() => [Users])
    async user(@Parent() article: Article){
        // console.log(article);
        return await this.usersService.GetArticle(article._id) // send id of article to user service to find 
    }
    
}
