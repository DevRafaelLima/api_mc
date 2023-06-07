import { IGaleriaService } from "../contracts/iGaleriaService";
import { Result } from "../infra/result";
import { Galeria } from "../models/galeria";
import { GaleriaRepository } from "../repository/galeriaRepository";

export class GaleriaService implements IGaleriaService {
    async get(_id: string): Promise<Galeria> {
        let result = await GaleriaRepository.findById(_id);
        return result as Galeria;
    }

    async getAll(page: number, qtd: number): Promise<Result<Galeria>> {
        let total = await GaleriaRepository.count({});
        let data = await GaleriaRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        let result = new Result<Galeria>(qtd, page, total, data);
        return result;
    }
}