/**
 * 1. Щасливий квиток
 * Напишіть веб-аплікацію для розрахунку щасливого квитка.
 * Користувач вводить шестизначний номер квитка (трамвай/тролейбус).
 * Визначте, чи дорівнює сума перших трьох цифр сумі останніх трьох цифр.
 * Виведіть повідомлення про "щасливість" квитка користувачеві.
 */

let num = prompt('Enter ticket number:');

// // const correctInput = (num) => {
// //   isNaN(num) || num.toString().length !== 6
// //     ? alert(`It's not valid number`)
// //     : num;
// // };
// // correctInput(num);

// // let ticketNum = num.toString();

function check(num) {
  let ticketNum = num.toString();
  const partFirst = () => {
    let countFirst = 0;
    for (let i = 0; i < Math.ceil(ticketNum.length / 2); i++) {
      countFirst += Number(ticketNum[i]);
    }
    return countFirst;
  };

  const partSecond = () => {
    let countSecond = 0;
    for (
      let i = Math.ceil(ticketNum.length / 2);
      i <= ticketNum.length - 1;
      i++
    ) {
      countSecond += Number(ticketNum[i]);
    }
    return countSecond;
  };

  partFirst() !== partSecond()
    ? alert(`It's not happy ticket :(`)
    : alert(`You have HAPPY TICKET - Eat it! :D`);
}
check(num);
