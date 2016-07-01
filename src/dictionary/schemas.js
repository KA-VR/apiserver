import mongoose from 'mongoose';

const wordSchema = mongoose.Schema({
  name: String,
  def: Array,
  syn: Array,
  ant: Array,
});

export default wordSchema;
