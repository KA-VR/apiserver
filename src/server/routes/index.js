import { Router } from 'express';
import dictionaryController from '../controllers/dictionaryController';
import searchController from '../controllers/searchController';
import weatherController from '../controllers/weatherController';
import calculatorController from '../controllers/calculatorController';
import mongoController from '../controllers/mongoController';
import youtubeController from '../controllers/youtubeController';

const router = new Router();

router.route('/api/dict').post(dictionaryController.getDefinition);
router.route('/api/thes').post(dictionaryController.getSynonyms);

router.route('/api/searches/').post(searchController.getSearch);
router.route('/api/news/').post(searchController.getNews);
router.route('/api/website/').post(searchController.getWebsite);
router.route('/api/images/').post(searchController.getImages);

router.route('/api/weather').post(weatherController.getWeather);

router.route('/api/calculate').post(calculatorController.getCalculation);

router.route('/api/writemongo').post(mongoController.writeWord);
router.route('/api/searchmongo').post(mongoController.searchWord);

router.route('/api/searchyoutube').post(youtubeController.searchVideo);

router.route('/api/searchyelprestaurant').post(yelpController);
router.route('/api/searchyelpbusiness').post(yelpController);
router.route('/api/searchyelpphone').post(yelpController);

export default router;
