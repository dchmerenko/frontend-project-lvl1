import name from '../src/cli.js';
import { doQuiz, isEven, randInt } from '../src/index.js';

const generateEvenQuestion = () => {
  const number = randInt();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

const taskMsg = 'Answer "yes" if the number is even, otherwise answer "no".';

const askEven = () => doQuiz(
  name,
  taskMsg,
  generateEvenQuestion,
);

export default askEven;
