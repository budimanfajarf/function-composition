const split = (str) => str.split('');

const reverse = (arr) => arr.reverse();

const join = (arr) => arr.join('');

const compose =
  (...functions) =>
  // (arg) => {
  //   console.log({ arg, functions });

  //   let result = arg;
  //   functions.reverse().forEach((func) => {
  //     result = func(result);
  //   });
  //   return result;
  // };
  (arg) =>
    functions.reduceRight((acc, func) => func(acc), arg);

const value = compose(join, reverse, split)('hello');

console.log(value);
