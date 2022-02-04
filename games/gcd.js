import name from '../src/cli.js';
import { doQuiz, gcd, randInt } from '../src/index.js';

const generateGcdQuestion = () => {
  const a = randInt();
  const b = randInt();
  const correctAnswer = String(gcd(a, b));

  return [`${a} ${b}`, correctAnswer];
};

const taskMsg = 'Find the greatest common divisor of given numbers.';

const askGcd = () => doQuiz(
  name,
  taskMsg,
  generateGcdQuestion,
);

export default askGcd;
