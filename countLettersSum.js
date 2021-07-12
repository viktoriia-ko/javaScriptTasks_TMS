/*
Написать функцию которая принимает слово и возвращает число соответствующее слову.
*/

const ALPHABET_STR = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

function getWordInput() {
  let word = "";
  while (word >= 0) {
    word = prompt("Введите слово", "").toLowerCase().split("");
  }
  console.log(word);
  return word;
}

function countLettersSum(word, ALPHABET_STR) {
  let lettersSum = 0;
  for (let i = 0; i < word.length; i++) {
    lettersSum += [...ALPHABET_STR].indexOf(word[i]) + 1;
  }

  console.log(lettersSum);
  return lettersSum;
}

function playLettersSum() {
  let word = getWordInput();
  let lettersSum = countLettersSum(word, ALPHABET_STR);
  alert(`Сумма букв ${word} составляет ${lettersSum}`);
}
playLettersSum();
