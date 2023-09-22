const split = (str) => str.split('');

const reverse = (arr) => arr.reverse();

const join =
  (separator = '') =>
  (arr) =>
    arr.join(separator);

const compose =
  (...functions) =>
  //// not-efficient, but more easy to understand
  // (arg) => {
  //   console.log({ arg, functions });

  //   let result = arg;
  //   functions.reverse().forEach((func) => {
  //     result = func(result);
  //   });
  //   return result;
  // };
  //// more efficient way
  (arg) =>
    functions.reduceRight((acc, func) => func(acc), arg);

const value1 = compose(join(), reverse, split)('hello');
const value2 = compose(join('-'), reverse, split)('hello');

console.log({ value1, value2 });
