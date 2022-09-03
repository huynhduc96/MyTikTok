const counterFunc = function () {
  let counter = 0;
  return function () {
    counter += 1;
    console.log(counter);
    return counter;
  };
};

const add = counterFunc();

add();
add();
add();

const add1 = counterFunc();

add1();
add1();
add1();

console.log(add.prototype);
