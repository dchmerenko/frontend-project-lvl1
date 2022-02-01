// Auxiliary functions mudule.

/**
 * Return true if number is even else false.
 */
const isEven = (number) => number % 2 === 0;

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

  if (low === undefined && upper === undefined) {
    lb = lowDefault;
    ub = upperDefault;
  } else if (low !== undefined && upper === undefined) {
    ub = low;
    lb = lowDefault;
  } else {
    lb = low;
    ub = upper;
  }

  return lb + 1 + Math.floor((ub - lb) * Math.random());
};

export { isEven, randInt };
