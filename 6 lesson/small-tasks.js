// Написати функцію, яка приймає двоцифрове число і повертає його в текстовому вигляді. Наприклад: 35 – тридцять п'ять, 89 – вісімдесят дев'ять, 12 – дванадцять.
// write a function that takes a two-digit number and returns it in text
// for example: 35 – threety five, 89 – eighty nine, 12 – twelve


// function twoDigit(num) {
//   let result = '';
//   let firstDigit = num % 10;
//   let secondDigit = Math.floor(num / 10);
//   switch (secondDigit) {
//       case 1:
//           result += 'ten';
//           break;
//       case 2:
//           result += 'twenty';
//           break;
//       case 3:
//           result += 'thirty';
//           break;
//       case 4:
//           result += 'forty';
//           break;
//       case 5:
//           result += 'fifty';
//           break;
//       case 6:
//           result += 'sixty';
//           break;
//       case 7:
//           result += 'seventy';
//           break;
//       case 8:
//           result += 'eighty';
//           break;
//       case 9:
//           result += 'ninety';
//           break;
//   }
//   switch (firstDigit) {
//       case 1:
//           result += ' one';
//           break;
//       case 2:
//           result += ' two';
//           break;
//       case 3:
//           result += ' three';
//           break;
//       case 4:
//           result += ' four';
//           break;
//       case 5:
//           result += ' five';
//           break;
//       case 6:
//           result += ' six';
//           break;
//       case 7:
//           result += ' seven';
//           break;
//       case 8:
//           result += ' eight';
//           break;
//       case 9:
//           result += ' nine';
//           break;
//   }
//   return result;
// }

// console.log(twoDigit(35)); // thirty-five
// console.log(twoDigit(89)); // eighty-nine
// console.log(twoDigit(12)); // twelve



// Написати функцію, яка приймає рядок та виводить статистику про неї: кількість літер, кількість цифр та кількість інших знаків.

const sort = {
  numb: 0,
  letter: 0,
  symb: 0,
};

let str = '123?%Aaa';

sortstr = [...str].reduce((st, el) => {
  
  if (el >= 'A' && el <= 'z') {
    st.letter++;
  } else if (el >= '0' && el <= '9'){
    st.numb++;
  } else {
    st.symb++;
  }
    return st;
}, sort);

console.log(sortstr);

//Написати функцію, яка замінює в отриманому рядку великі літери на маленькі, малі – на великі, а цифри – на знак нижнього підкреслення.


let str3 = '6asdS5';
arr3 = [...str3]
transformStr = arr3.map(function (el) {
  if (el >= '0' && el <= '9') {
    el = '_';
  } else if (el === el.toUpperCase()) {
    el = el.toLowerCase();
  } else if (el === el.toLowerCase()) {
    el = el.toUpperCase();
  }
  return el;
}
).join('');
console.log(transformStr);