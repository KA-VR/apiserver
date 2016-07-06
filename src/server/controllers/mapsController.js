/* eslint-disable no-console */
const getMap = (req, res) => {
  const origin = req.body.origin;
  const destination = req.body.destination;

  const url = `https://www.google.com/maps/embed/v1/directions?origin=${origin}&destination=${destination}&key=AIzaSyCUvKdYwdIa94vBNx70nwDLb28qaD2dNP4`;
  res.send({ url });
};

export default { getMap };
