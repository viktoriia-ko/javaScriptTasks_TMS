/*Массив уникальных случайных цифр. 
Создадим массив для семи элементов;  
Заполним его случайными цифрами от 0 до 10;  
Цифры в массиве не должны повторяться;  
Вывести этот массив в консоль;  
Упорядочить массив;  
Еще раз вывести его в консоль.*/

const SetOfRandomNumbers = new Set();

while (SetOfRandomNumbers.size < 7) {
  let number = Math.floor(Math.random() * 10 + 1);
  SetOfRandomNumbers.add(number);
}

let arrayOfNumbers = [...SetOfRandomNumbers];

console.log(arrayOfNumbers);

console.log(arrayOfNumbers.sort());
