import mongoose from 'mongoose';

const Schema = mongoose.schema;

const wordSchema = new Schema({
  partOfSpeech: String,
  meanings: [
    String,
  ],
  examples: [
    String,
  ],
  synonyms: [
    String,
  ],
  antonyms: [
    String,
  ],
});

export default wordSchema;
