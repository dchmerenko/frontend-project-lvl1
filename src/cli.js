import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  return readlineSync.question('May I have your name? ');
};

const greetUser = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export { welcome, getUserName, greetUser };
