import openweather from 'openweather';

const getWeather = (req, res) => {
  const key = req.body.key || null;
  console.log('req is', req.body);
  console.log('openWeather', openweather);
  openweather.openWeather(req.body, (result) => res.send(result), key);
};

export default { getWeather };
