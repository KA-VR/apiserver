import tc from 'text-calculator';

const getCalculation = (req, res) => {
  const calculation = req.body.calculation;
  tc.calculate(calculation, result => res.send({ result }));
};

export default { getCalculation };
