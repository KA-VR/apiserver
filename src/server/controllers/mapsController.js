/* eslint-disable no-console */
const getMap = (req, res) => {
  const origin = req.body.origin;
  const latitude = origin.latitude;
  const longitude = origin.longitude;
  const destination = req.body.destination;
  const coords = `${latitude}%2C%20${longitude}`;

  const url = `https://www.google.com/maps/embed/v1/directions?origin=${coords}&destination=${destination}&key=AIzaSyCUvKdYwdIa94vBNx70nwDLb28qaD2dNP4`;
  res.send({ url });
};

export default { getMap };
