import { INewsService } from '../contracts/iNewsService';
import { Result } from '../infra/result';
import { NewsRepository } from '../repository/newsRepository';
import { News } from '../models/news';

export class NewsService implements INewsService {
    async get(_id: string): Promise<News> {
        let resutl = await NewsRepository.findById(_id);
        return resutl as News;
    }

    async getAll(page: number, qtd: number): Promise<Result<News>> {
        let total = await NewsRepository.count({});
        let data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        let result = new Result<News>(qtd, page, total, data);
        return result;
    }
}

