import { IVideosService } from "../contracts/iVideosService";
import { Result } from "../infra/result";
import { Videos } from "../models/videos";
import { VideoRepository } from "../repository/videoRepository";

export class VideosService implements IVideosService {
    async get(_id: string): Promise<Videos> {
        let result = await VideoRepository.findById(_id);
        return result as Videos;
    }

    async getAll(page: number, qtd: number): Promise<Result<Videos>> {
        let total = await VideoRepository.count({});
        let data = await VideoRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        let result = new Result<Videos>(qtd, page, total, data);
        return result;
    }
}