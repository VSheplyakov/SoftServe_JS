/**
 * Калькулятор
Написати функцію – калькулятор. Функція приймає рядок з прикладом, визначає, яка дія необхідна виконати (+ - * /), переводить операнди у числа, вирішує приклад та повертає результат.

calc(12, 4, '+') //16
calc(1, 4, '-') //-3
calc(12, 5, '/') //2.4
calc(1.2, 3, '*') //3.6
 */



function calc(a, b, c) {
    c === '+' ? console.log(a + b):
    c === '-' ? console.log(a - b):
    c === '*' ? console.log(+(a * b).toFixed(2)): //console.log(typeof (a * b)*10/10):
    c === '/' ? console.log(+(a / b).toFixed(2)):
    console.log(`Uncorrect input`);
}

calc(12, 4, '+') //16
calc(1, 4, '-') //-3
calc(12, 5, '/') //2.4
calc(1.2, 3, '*') //3.6