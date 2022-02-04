import name from '../src/cli.js';
import { doQuiz, randInt } from '../src/index.js';

const generateCalcQuestion = () => {
  const a = randInt();
  const b = randInt();
  const operationsMap = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };
  const operations = Object.keys(operationsMap);
  const operator = operations[randInt(operations.length - 1)];
  const expression = `${a} ${operator} ${b}`;
  const correctAnswer = String(operationsMap[operator](a, b));

  return [expression, correctAnswer];
};

const taskMsg = 'What is the result of the expression?';

const askCalc = () => doQuiz(
  name,
  taskMsg,
  generateCalcQuestion,
);

export default askCalc;
