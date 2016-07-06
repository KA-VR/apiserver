// Yelp API starter module in ES6
import Yelp from 'yelp';

// Create a Yelp object, passing in required parameters
const yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
});

// Restaurant Search
const searchYelp = (req, res) => {
  const searchQuery = {
    location: req.body.query || 'San Francisco',
    term: req.body.query || 'Lunch',
    limit: 5,
    sort: 0,
  };
  yelp.search(searchQuery)
    .then(yelpresults => {
      const results = yelpresults.businesses;
      const shops = results.map(shop => {
        return {
          name: shop.name,
          url: shop.url,
          location: shop.location.display_address[0],
          city: shop.location.city,
          state: shop.location.state_code,
          zip: shop.location.postal_code,
          reviews: shop.review_count,
          image: shop.image_url,
          rating: shop.rating,
          text: shop.snippet_text,
        };
      });
      res.send({ shops });
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
