import mongoose from 'mongoose';
import { NewSchema } from '../models/newSchema';

export const NewsRepository = mongoose.model('news', NewSchema);