/* eslint-disable no-console */
import fetch from 'isomorphic-fetch';

const getInspirationalQuotes = (req, res) => {
  fetch('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en', {
    method: 'POST',
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      res.send(response);
    });
};

export default { getInspirationalQuotes };
