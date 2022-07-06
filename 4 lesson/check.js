/**
 * Чек-методи Створити масив, який описує чек у магазині. Кожен елемент масиву складається із назви товару, кількості та ціни за одиницю товару. Написати такі функції.
 * Роздруківка чека на екран.
 * Підрахунок загальної суми покупки.
 * Отримання найдорожчої покупки у чеку.
 * Підрахунок середньої вартості одного товару у чеку.
 */
const check = [
  ['Water', 2, 30],
  ['Cheese', 1, 150],
  ['Vhocolate', 1, 50],
  ['Beef', 1, 450],
  ['Beer', 3, 35],
  ['Chips', 3, 35],
];

function print() {
  check.forEach((el) => {
    console.log(`products name: ${el[0]}, quantity: ${el[1]}pcs, price: ${el[2]}UAH`);
  });
}
print();

function sum() {
  let sum = 0;
  for (let i = 0; i < check.length; i++) {
    sum += check[i][1] * check[i][2];
  }
  console.log(`Total check amount: ${sum} UAH`);
}
sum();

function highestPrice() {
  let res = check[0];
  for (let i = 0; i < check.length; i++) {
    if (res[1] * res[2] < check[i][1] * check[i][2]) {
      res = check[i];
    }
  }
  console.log(`Highest price prosucts: ${res[0]}`);
}
highestPrice();

function averagePrice() {
  let res = 0;
  for (let i = 0; i < check.length; i++) res += check[i][1] * check[i][2];
  console.log(`Average price by one item: ${Math.round(res / check.length)} UAH`);
}
averagePrice();
