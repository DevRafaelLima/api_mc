import { INewsService } from '../contracts/iNewsService';
import { Result } from '../infra/result';
import { NewsRepository } from '../repository/newsRepository';

export class NewsService implements INewsService {
    async get(_id: string) {
        let resutl = await NewsRepository.findById(_id);
        return resutl;
    }

    async getAll(page: number, qtd: number): Promise<Result> {
        console.log("checou aqui no service")
        let total = await NewsRepository.count({});
        console.log(total);
        let data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        console.log(data);
        let result = new Result(qtd, page, total, data);
        console.log(result);
        return result;
    }
}

