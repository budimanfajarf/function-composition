const split = (str) => str.split('');

const reverse = (arr) => arr.reverse();

const join = (arr) => arr.join('');

const compose =
  (...functions) =>
  (arg) => {
    console.log({ arg, functions });
  };

const value = compose(join, reverse, split)('hello');

console.log(value);
