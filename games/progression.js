import name from '../src/cli.js';
import { doQuiz, randInt } from '../src/index.js';

const generateProgressionQuestion = () => {
  const start = randInt();
  const step = randInt(2, 10);
  const repeat = randInt(5, 10);
  const progression = [];

  for (let i = start; i < start + step * repeat; i += step) {
    progression.push(String(i));
  }

  const secretIdx = randInt(repeat - 1);
  const correctAnswer = progression[secretIdx];
  progression[secretIdx] = '..';
  const sequence = progression.join(' ');

  return [sequence, correctAnswer];
};

const taskMsg = 'What number is missing in the progression?';

const askProgression = () => doQuiz(
  name,
  taskMsg,
  generateProgressionQuestion,
);

export default askProgression;
