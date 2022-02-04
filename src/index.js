// Auxiliary functions mudule.

import readlineSync from 'readline-sync';

/**
 * Ask question and return an answer.
 */
const askUser = (question) => readlineSync.question(`Question: ${question} `);

/**
 * Main loop.
 */
const doQuiz = (userName, taskMsg, questionGenerator) => {
  console.log(taskMsg);

  for (let questionCounter = 0; questionCounter < 3; questionCounter += 1) {
    const [question, correctAnswer] = questionGenerator();
    const userAnswer = askUser(question);

    if (userAnswer !== correctAnswer) {
      console.log([
        `"${userAnswer}" is wrong answer ;(. `,
        `Correct answer was "${correctAnswer}"\n`,
        `Let's try again, ${userName}!`,
      ].join(''));
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

/**
 * Return Greatest Common Divisor.
 */
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

/**
 * Return true if number is even else false.
 */
const isEven = (number) => number % 2 === 0;

/**
 * Return true if number is prime else false.
 */
const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * Return random integer from low to upper bounds inclusevly.
 * (default from 0 to 10)
 *
 * randInt()      --> 0..10
 * randInt(5)     --> 0..5
 * randInt(5, 10) --> 5..10
 */
const randInt = (low, upper) => {
  const lowDefault = 0;
  const upperDefault = 10;

  let lb;
  let ub;

  if (upper !== undefined) {
    lb = low;
    ub = upper;
  } else if (low !== undefined) {
    ub = low;
    lb = lowDefault;
  } else {
    lb = lowDefault;
    ub = upperDefault;
  }

  return lb + Math.floor((ub + 1 - lb) * Math.random());
};

export {
  askUser,
  doQuiz,
  gcd,
  isEven,
  isPrime,
  randInt,
};
