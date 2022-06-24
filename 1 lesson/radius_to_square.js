/**
 *  1. Площа
 *  Створіть веб-аплікацію, яка питає у користувача радіус кола та видає площу цього кола.
 *  *Приклад:*
 *  --> 123 
 *  <-- 47529.15525615998
 *  --> 3.09 
 *  <-- 29.996240815740702
 */

// let radius = prompt('Enter circle radius:');

// const areaCircle = (radius) => Math.PI * radius * radius; // Math.pow(radius, 2)

// alert('Area of circle is: ' + areaCircle(radius))


const areaCircle = (radius) => console.log(Math.PI * radius * radius); // Math.pow(radius, 2)

areaCircle(123);