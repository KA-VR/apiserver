import { Router } from 'express';
import dictionaryController from '../controllers/dictionaryController';
import searchController from '../controllers/searchController';
import weatherController from '../controllers/weatherController';
import calculatorController from '../controllers/calculatorController';

const router = new Router();

router.route('/api/dict').post(dictionaryController.getDefinition);
router.route('/api/thes').post(dictionaryController.getSynonyms);

router.route('/api/searches/').post(searchController.getSearch);
router.route('/api/news/').post(searchController.getNews);
router.route('/api/website/').post(searchController.getWebsite);
router.route('/api/images/').post(searchController.getImages);

router.route('/api/weather').post(weatherController.getWeather);

router.route('/api/calculate').post(calculatorController.getCalculation);

export default router;
