import ds from 'dictionary-scrape';

const getDefinition = (req, res) => {
  const word = req.body.word || req.query.word;
  ds.getDictionary(word)
    .then(definition => res.send(definition))
    .catch(err => res.send(err));
};

const getSynonyms = (req, res) => {
  const word = req.body.word || req.query.word;
  ds.getThesaurus(word)
    .then(synonyms => res.send(synonyms))
    .catch(err => res.send(err));
};

export default { getDefinition, getSynonyms };
