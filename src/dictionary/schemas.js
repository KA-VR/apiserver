import mongoose from 'mongoose';

/* eslint-disable new-cap */
const wordSchema = mongoose.Schema({
  name: String,
  def: Array,
  syn: Array,
  ant: Array,
});

export default wordSchema;
