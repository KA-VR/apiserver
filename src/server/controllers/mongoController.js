/* eslint-disable no-console */
import mongoose from 'mongoose';
import helpers from '../../dictionary/helpers';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongodb connected on port 27017');
});

const writeWord = (req, res) => {
  const newWordObj = {
    name: req.body.name,
    def: req.body.def,
    syn: req.body.syn,
    ant: req.body.ant,
  };
  helpers.saveWord(newWordObj, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

const searchWord = (req, res) => {
  const wordObj = req.body.word;
  helpers.findWord(wordObj, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

export default {
  writeWord,
  searchWord,
};
