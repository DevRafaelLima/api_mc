import { NewsService } from '../services/newsService';
import { Request, Response } from 'express';

class NewsController {
    private _service: NewsService;

    constructor() {
        this._service = new NewsService();
    }

    async get(request: Request, response: Response) {
        try {
            console.log("bateu na request")
            console.log(request.params)
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
            console.log(`page: ${page} - qtd: ${qtd}`);
            const result = await this._service.getAll(page, qtd);
            console.log("passou do result")
            response.status(200).json({ result })
        } catch (error: any) {
            response.status(500).json({ error: error.message || error.toString(), "teste" : "ok" });
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const _id = request.params.id;
            let result = await this._service.get(_id);
            response.status(200).json({ result });
        } catch (error: any) {
            response.status(500).json({ error: error.message || error.toString(), "teste" : "ok" });
        }
    }
}


export default new NewsController();