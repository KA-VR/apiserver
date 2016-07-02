// Yelp API starter module in ES6
import Yelp from 'yelp';

// Create a Yelp object, passing in required parameters
const yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
});

const defaultParams = {
  location: 'San Francisco',
  term: 'food',
  limit: 1,
  sort: 0,
  radius_filter: 3200,
};

// Restaurant Search
const searchYelp = (req, res) => {
  const searchQuery = Object.keys(req.body).length ? req.body : defaultParams;
  yelp.search(searchQuery)
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      if (err) {
        console.error('Error searching Yelp Restaurants: ', err);
      }
    });
};

export default {
  searchYelp,
};
