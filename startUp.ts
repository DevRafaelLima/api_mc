import express, { Application, Request, Response } from 'express';
import Database from './infra/db';
import NewsController from './controller/newsController';


class StartUp {
    public app: Application;
    private _db = new Database();
    constructor() {
        this.app = express();
        this.routes();
        this._db.connect();
    }

    routes() {
        this.app.route("/").get((req, resp) => {
            resp.send({ versao: "0.0.1" });
        });

        this.app.route("/api/v1/news/:id").get((req: Request, resp: Response) => {
            return NewsController.getById(req, resp);
        })

        this.app.route("/api/v1/news/:page/:qtd").get((req: Request, resp: Response) => {
            return NewsController.get(req, resp);
        })
    }
}

export default new StartUp();