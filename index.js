// 1) Написати функцію струлку, яка приймає безліч
// аргументів і повертає їх добуток.

const multi = (...args) => args.reduce((accum, item) => accum * item);
console.log(multi(1, 2, 3, 4, 5));

// 2) Є масив чисел, треба написати функцію, яка повертає масив
// з двох елементів, які є мінімальним і максимальним значенням
// джерельного масиву.

const array = [1, -5, 2, 4, 7, 9, 10, 100];
const minAndMaxElemOfArray = (array) => {
  const minAndMax = [];
  minAndMax.push(Math.min(...array), Math.max(...array));
  return minAndMax;
};
console.log(minAndMaxElemOfArray(array));
