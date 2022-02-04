import name from '../src/cli.js';
import * as config from '../config.js';
import { doQuiz, randInt } from '../src/index.js';

const generateProgressionQuestion = () => {
  const start = randInt();
  const step = randInt(config.MIN_PROGRESSION_STEP, config.MAX_PROGRESSION_STEP);
  const repeat = randInt(config.MIN_PROGRESSION_LENGTH, config.MAX_PROGRESSION_LENGTH);
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
