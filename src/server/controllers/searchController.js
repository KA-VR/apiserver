import gss from 'google-search-scrape';

const getNews = (req, res) => {
  const query = req.body.query || req.query.query;
  gss.getNews(query)
    .then(news => res.send(news));
};

const getWebsite = (req, res) => {
  const query = req.body.query || req.query.query;
  gss.getWebsite(query)
    .then(website => res.send(website));
};

const getSearch = (req, res) => {
  const query = req.body.query || req.query.query;
  gss.getSearch(query)
    .then(results => res.send(results));
};

const getImages = (req, res) => {
  const query = req.body.query || req.query.query;
  gss.getImages(query)
    .then(images => res.send(images));
};

export default { getNews, getWebsite, getSearch, getImages };
