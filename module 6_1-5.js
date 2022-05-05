// задание 1

function identifyContent(arr) {
  let odd = 0;
  let even = 0;
  let zero = 0;
  let notANumber = 0;
  arr.forEach(function (item) {
    if (isNaN(item) || item === null) {
      notANumber++;
    } else if (item === 0) {
      zero++;
    } else if (item % 2 === 0) {
      even++;
    } else if (item % 2 > 0) {
      odd++;
    }
  });
  console.log(`Нечетных числел: ${odd}, четных чисел: ${even}, нулей: ${zero}, не являются числом: ${notANumber}`);
};

let someArray = [24, 5, 8, 1, 2, 3, null, 0, undefined];

identifyContent(someArray);

// задание 2

function simpleNumbers(num) {
  for (i = 0; i < num; i++) {
    if (num > 1000) {
      console.log("Данные неверны");
      break;
    } else if (i !== 1 && num % i === 0) {
      console.log(`${num} - составное число`);
      break;
    } else if (i === num - 1) {
      console.log(`${num} - простое число`);
    }
  }
}

simpleNumbers(999);

// задание 3 

function summ(num1) {
  return function(num2) {
    return num1+num2;
  }
}

const result = summ(2);

console.log(result(6));

// задание 4

function numbers (num1, num2) {
  let currentNum = num1;
  let intervalId = setInterval(function() {
    console.log(currentNum);
    if (currentNum == num2) {
      clearInterval(intervalId);
    } currentNum++;
  }, 1000);
}

numbers(5, 15);

// задание 5

const numbers = (x, n) => {
  return Math.pow(x, n);
}

console.log(numbers(2, 3));