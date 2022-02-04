import name from '../src/cli.js';
import { doQuiz, randInt } from '../src/index.js';

const generateCalcQuestion = () => {
  const a = randInt();
  const b = randInt();
  const operations_map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  }
  const operations = Object.keys(operations_map);
  const operator = operations[randInt(operations.length - 1)];
  const expression = `${a} ${operator} ${b}`;
  const correctAnswer = String(operations_map[operator](a, b));

  return [expression, correctAnswer];
};

const taskMsg = 'What is the result of the expression?';

const askCalc = () => doQuiz(
  name,
  taskMsg,
  generateCalcQuestion,
);

export default askCalc;
