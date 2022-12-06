import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const num = getRandomNumInRange(2, 30);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};
