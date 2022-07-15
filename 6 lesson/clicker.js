/**
 * Створити html-сторінку з клікером.

При кліку на кнопку "Додати" рахунок додається на 1
При кліку на кнопку "Відняти" рахунок віднімається на 1

 */

let btnPluse = document.querySelector('.btn__pluse');
let btnMines = document.querySelector('.btn__minus');
let counter = document.querySelector('.result');

let result = 0;
counter.innerHTML = result;

btnPluse.addEventListener('click', () => {
  result += 1;
  counter.innerHTML = result;
});

btnMines.addEventListener('click', () => {
  result -= 1;
  counter.innerHTML = result;
});

