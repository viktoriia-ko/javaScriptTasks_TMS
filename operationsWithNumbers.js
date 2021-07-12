/* Написать программу, которая выполняет следующие операции:
1. Запрашивает у пользователя число.
2. Последовательно задает вопрос Сколько отнять/прибавить/умножить/разделить от предыдущего результата?
3. По окончании вывести пользователю alert, содержащий формулу и результат например: ((((6 + 10) - 5) * 20) / 2 = 110).*/
const number1 = +prompt("Здравствуйте! Введите число", "");
console.log(number1);

const number2 = +prompt("Какое число прибавить?", "");
console.log(number2);

const number3 = +prompt("Какое число отнять?", "");
console.log(number3);

const number4 = +prompt("На какое число умножить?", "");
console.log(number4);

const number5 = +prompt("На какое число разделить?", "");
console.log(number5);

const total = ((number1 + number2 - number3) * number4) / number5;

alert(
  "((" +
    number1 +
    " + " +
    number2 +
    ")" +
    " - " +
    number3 +
    ")" +
    " * " +
    number4 +
    ")" +
    " / " +
    number5 +
    "=" +
    total
);
