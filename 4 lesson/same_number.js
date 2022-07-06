/**
 * Однакові цифри в діапазоні
 * Створіть веб-програму, в якій користувач вводить два числа (межі діапазону) від 10 до 99.
 * Потрібно знайти і вивести в консоль через кому всі числа в діапазоні, які мають хоч дві однакові цифри.
 */
let numOne = 25;
let numTwo = 68;

if (numOne, numTwo >= 10 && numOne, numTwo <= 99) {
  let res = '';
  for (let i = numOne; i <= numTwo; i++) {
    let q = i.toString();

    if (q[0] === q[1]) {
      res +=`${q[0]}${q[1]}, `;
    }
  }
  console.log(res);
} else {
  console.log('Wrong imput!');
}

// let a = 25;
// let b = 45;

// function doubleNum(a, b) {
//   if ((a, b >= 10 && a, b <= 99)) {
//     const arrNumb = [];
//     for (let i = a; i <= b; i++) {
//       arrNumb.push(i);
//     }
//     const arrStr = arrNumb.map((el) => el.toString());
//     const arrStrFilter = arrStr.filter((el) => el[0] === el[1]);
//     const result = arrStrFilter.join(', ');
//     console.log(result);
//   }
// }
// doubleNum(a, b);
