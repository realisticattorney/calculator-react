import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  if (operation === '/') {
    return numberTwo !== '0' ? num1.div(num2) : 'No division by zero';
  } if (operation === 'X') {
    return num1.times(num2);
  } if (operation === '+') {
    return num1.plus(num2);
  } if (operation === '-') {
    return num1.minus(num2);
  }
  if (operation === '=') {
    return num2;
  }
  return 'Not valid operation';
};

export default Operate;
