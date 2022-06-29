/**
 * 1. Щасливий квиток
 * Напишіть веб-аплікацію для розрахунку щасливого квитка.
 * Користувач вводить шестизначний номер квитка (трамвай/тролейбус).
 * Визначте, чи дорівнює сума перших трьох цифр сумі останніх трьох цифр.
 * Виведіть повідомлення про "щасливість" квитка користувачеві.
 */


//!Варіант Array

let num = prompt('Enter ticket number:');

function check (num) {
    if ((num.toString()).length !== 6 || isNaN(num)) {
        alert(`It's not correct number, chek it again`)
    } else {
        const numStr = num.toString();
        const arrFirst = numStr.split('', 3);
        const arrSecond = numStr.slice(3).split('');
        console.log(arrFirst);
        console.log(arrSecond);

        const sumFirst = arrFirst.reduce((acc, value) => Number(acc) + Number(value));
        const sumSecond = arrSecond.reduce((acc, value) => Number(acc) + Number(value));
        console.log(sumFirst);
        console.log(sumSecond);
        sumFirst !==sumSecond ? alert(`It's not happy ticket :(`) : alert(`You have HAPPY TICKET - Eat it! :D`)
    }
}
check(num);




//!Варіант String

// let numb = prompt('Enter ticket number:');

// function check(numb) {
//   let ticketNum = numb.toString();
//   const partFirst = () => {
//     let countFirst = 0;
//     for (let i = 0; i < Math.ceil(ticketNum.length / 2); i++) {
//       countFirst += Number(ticketNum[i]);
//     }
//     return countFirst;
//   };

//   const partSecond = () => {
//     let countSecond = 0;
//     for (
//       let i = Math.ceil(ticketNum.length / 2);
//       i <= ticketNum.length - 1;
//       i++
//     ) {
//       countSecond += Number(ticketNum[i]);
//     }
//     return countSecond;
//   };

//   partFirst() !== partSecond()
//     ? alert(`It's not happy ticket :(`)
//     : alert(`You have HAPPY TICKET - Eat it! :D`);
// }
// check(numb);
