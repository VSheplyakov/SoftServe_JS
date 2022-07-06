/**
 * 5. Ваше замовлення Ваше завдання - відсортувати заданий рядок. Кожне слово в рядку міститиме одне число. Це число є позиція, яку має мати слово в результаті.
 * Примітка. Числа можуть бути від 1 до 9. Отже, 1 буде першим словом (а не 0).
 * Якщо вхідний рядок порожній, поверніть порожній рядок. Слова у вхідному рядку будуть містити лише дійсні послідовні числа. Приклад:
 * "is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"
 * "" --> "" *
 */
let str = 'is2 Thi1s T4est 3a';

function sortStr(str) {
  arr = str.split(' ');
  console.log(arr);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('1')) result[0] = arr[i];
    if (arr[i].includes('2')) result[1] = arr[i];
    if (arr[i].includes('3')) result[2] = arr[i];
    if (arr[i].includes('4')) result[3] = arr[i];
    if (arr[i].includes('5')) result[4] = arr[i];
    if (arr[i].includes('6')) result[5] = arr[i];
    if (arr[i].includes('7')) result[6] = arr[i];
    if (arr[i].includes('8')) result[7] = arr[i];
    if (arr[i].includes('9')) result[8] = arr[i];
  }
  console.log(result);
}
sortStr(str);

// function sortStr(str) {
//     arr = str.split(' ');
//     console.log(arr);
//     const result = [];

//     for (let i = 0, j = 1; i < arr.length, j <= arr.length; i++, j++) {
//       let jStr = j.toString();
//       console.log(jStr);
//       if (arr[i].includes(jStr)) result[i] = arr[i];

//     }
//     console.log(result);
//   }
//   sortStr(str);
