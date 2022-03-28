import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import data from '../data/data.static';
import { Article, ArticleDocument } from './article.entity';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
    ){}

    async getAll(){
        return this.articleModel.find().lean();
    }

    async GetOneById(args){
        return this.articleModel.findById(args).lean();
    }
}
