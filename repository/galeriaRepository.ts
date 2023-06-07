import mongoose from "mongoose";
import { Galeria } from "../models/galeria";
import { Fotos } from "../models/fotos";

const GaleriaSchema = new mongoose.Schema<Galeria>({
    titulo: { String },
    texto: { String },
    dataPublicacao: { Date },
    fotos: [Array<Fotos>()],
    ativo: { Boolean }
});

export const GaleriaRepository = mongoose.model('galeria', GaleriaSchema);