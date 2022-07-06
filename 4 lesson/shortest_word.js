/**
 * 4. Найкоротше слово
 * Напишіть функцію, що отримує у якості аргумента рядок слів та повертає довижину найкоротшого
 *
 * Приклад:
 * "bitcoin take over the world maybe who knows perhaps" --> 3
 * "turns out random test cases are easier than writing out basic ones" --> 3
 * "lets talk about javascript the best language" --> 3
 * "i want to travel the world writing code one day" --> 1
 * "Lets all go on holiday somewhere very cold" --> 2
 */

let str = 'bitcoin take over the world maybe who knows perhaps';

function shortestWord(str) {
  const arrWords = str.split(' ');

  let wordLength = arrWords[0].length;

  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].length < wordLength) {
      wordLength = arrWords[i].length;
    }
  }
  console.log(wordLength);
}
shortestWord(str);

// function shortestWord(str) {
//   const arrWords = str.split(' ');
//   let result = arrWords.forEach((el) => {
//     let wl = el[0].length;
//     if (el.length < wl) {
//       wl = el.length;
//     }
//     //console.log();
//   });

//   console.log(result);
// }
// shortestWord(str);


// let arr = str.split(' ');
// console.log(arr)

// const arrRes = arr.forEach(el => console.log(el.length));

// console.log(arrRes)



