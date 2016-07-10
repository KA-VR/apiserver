/* eslint-disable no-console */
// import lruCache from 'lru-cache';
import redis from 'redis';
const db = redis.createClient({
  host: process.env.DB_PORT_6379_TCP_ADDR || '127.0.0.1',
});

db.on('connect', () => {
  console.log('I am connected to redis!');
});

const addWord = (req, res) => {
  const newWordObj = {
    name: req.body.name,
    def: req.body.def,
    syn: req.body.syn,
    ant: req.body.ant,
  };
  console.log('newWordObj', newWordObj);

  db.set(newWordObj.name, JSON.stringify(newWordObj), (error, result) => {
    if (error) {
      console.log('Error in setting:', error);
    } else {
      console.log('stringified newWordObj from setting', JSON.stringify(newWordObj));
      console.log('result from setting', result);
      res.send(newWordObj);
    }
  });
};

const searchWord = (req, res) => {
  const wordObj = req.body;

  db.get(wordObj.name, (error, result) => {
    if (error) {
      console.log('Error in getting:', error);
    } else {
      console.log('stringified wordObj from getting', db.get(JSON.stringify(wordObj)));
      console.log('result from getting', result);
      res.send(wordObj);
    }
  });
};

export default { searchWord, addWord };
