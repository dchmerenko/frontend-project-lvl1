#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome, getUserName, greetUser } from '../src/cli.js';
import { isEven, randInt } from '../src/lib.js';

// Welcome & get userName
welcome();
const userName = getUserName();
greetUser(userName);

const askEven = () => {
  const question = randInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

// Brain-even game
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let round = 0; round < 3; round += 1) {
  const [question, correctAnswer] = askEven();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    console.log([
      `'${userAnswer}' is wrong answer ;(.`,
      `Correct answer was '${correctAnswer}'.`,
      `Let's try again, ${userName}!`,
    ].join('\n'));
    break;
  }
  console.log('Correct!');
}
console.log(`Congratulations, ${userName}!`);
