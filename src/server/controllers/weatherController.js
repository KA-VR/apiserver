import openWeather from 'openweather';

const getWeather = (req, res) => {
  const key = req.body.key || null;
  const coords = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  openWeather.getWeather(coords, (result) => res.send(result), key);
};

export default { getWeather };
