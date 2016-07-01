import mongoose from 'mongoose';
import wordSchema from './schemas';
import helpers from './helpers';

const Word = mongoose.model('Word', wordSchema);

export default Word;
