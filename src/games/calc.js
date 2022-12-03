import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const getMathOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumInRange(0, operators.length - 1)];
};

const calculate = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return 'Unexpected Value!';
  }
};

const generateRound = () => {
  let firstNum = 0;
  let secondNum = 0;
  const operator = getMathOperator();

  if (operator === '*') {
    firstNum = getRandomNumInRange(1, 12);
    secondNum = getRandomNumInRange(1, 12);
  } else {
    firstNum = getRandomNumInRange(1, 100);
    secondNum = getRandomNumInRange(1, 100);
  }

  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = calculate(firstNum, secondNum, operator);

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};