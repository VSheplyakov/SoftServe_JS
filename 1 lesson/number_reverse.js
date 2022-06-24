/**
 *  3. Навпаки
 *  Запросіть у користувача трицифрове число і виведіть його задом наперед.
 *  Приклад:
 *  --> 321
 *  <-- 123
 *  --> 109
 *  <-- 901
 */

const myNumbReverse = (myNumber) => console.log(myNumber.toString().split('').reverse().join(''));

myNumbReverse(100);

//console.log(typeof myNumbReverse);

// let myNumber = prompt('Enter three-digit number: ');
// let myNumbReverse = myNumber.toString().split('').reverse().join('');
// alert('Revers number is: ' + myNumbReverse);



