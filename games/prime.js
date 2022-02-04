import name from '../src/cli.js';
import * as config from '../config.js';
import { doQuiz, isPrime, randInt } from '../src/index.js';

const generatePrimeQuestion = () => {
  const number = randInt(config.MAX_PRIME_NUMBER);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

const taskMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const askPrime = () => doQuiz(
  name,
  taskMsg,
  generatePrimeQuestion,
);

export default askPrime;
