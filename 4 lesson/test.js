// let numb = prompt('enter number', '');
// if (numb > 0) {
//   alert('1');
// } else if ((numb = 0)) {
//   alert('0');
// } else {
//   alert('-1');
// }

// // let result;

// // if (a + b < 4) {
// //   result = 'Нижче';
// // } else {
// //   result = 'Вище';
// // }

// let result = a + b < 4 ? 'Нижче' : 'Вище';

// // let message;

// // if (login == 'Працівник') {
// //   message = 'Привіт';
// // } else if (login == 'Директор') {
// //   message = 'Вітаю';
// // } else if (login == '') {
// //   message = 'Немає логіну';
// // } else {
// //   message = '';
// // }

// let message =
//   login == 'Працівник'
//     ? 'Привіт'
//     : login == 'Директор'
//     ? 'Вітаю'
//     : login == ''
//     ? 'Немає логіну'
//     : '';

// let age;

// if (age >= 14 && age <= 90);

// if (age <= 14 && age >= 90);

// if (14 >= !age <= 90);

// let login = prompt('Enter Login', '');

// if (login === 'Admin') {
//   let pass = prompt('enter pass', '');
//   if (pass === 'TheMaster') {
//     alert('Welcome');
//   } else if (pass === null || pass === '') {
//     alert('Canceled');
//   } else {
//     alert('Wrong password');
//   }
// } else if (login === '' || login === null) {
//   alert('Canceled');
// } else {
//   alert(`I don't know you`);
// };

function pow(a, b) {
    let res = a;
    for (let i = 1; i < b; i++) {
        res *= a;
    }
        
//console.log(a)
return res;
}

pow(3, 2)
console.log(pow(3, 2))