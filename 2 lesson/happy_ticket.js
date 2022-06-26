/**
 * 1. Щасливий квиток
 * Напишіть веб-аплікацію для розрахунку щасливого квитка. Користувач вводить шестизначний номер квитка (трамвай/тролейбус).
 * Визначте, чи дорівнює сума перших трьох цифр сумі останніх трьох цифр. Виведіть повідомлення про "щасливість" квитка користувачеві.
 */

//let num = prompt('Enter ticket number:');
let num = 111111; //prompt('Enter ticket number:');

function check(num) {
  let numStr = num.toString();
  console.log(numStr);
  const partFirst = () => {
    let countFirst = 0;
    for (let i = 0; i <= 2; i++) {
      countFirst += Number(numStr[i]);
      console.log(countFirst);
    }
    return countFirst;
  };

  const partSecond = () => {
    let countSecond = 0;
    for (let i = Math.ceil(numStr.lenght / 2); i <= numStr.lenght - 1; i++) {
      countSecond += Number(numStr[i]);
      console.log(countSecond);
    }
    return countSecond;
  };

  partFirst() !== partSecond()
    ? console.log('not') //alert(`It's not happy ticket :(`)
    : console.log('yes'); //alert(`You have HAPPY TICKET - Eat it! :D`);
}
check(num);
// let numStr = num.toString();
// let i = numStr.length/2;
// alert(i)
