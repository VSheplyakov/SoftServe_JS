/**
 * 2. Фаренгейти
 * Кевін щойно приїхав зі США і не може звикнути до нашої системи вимірювання температури.
 * Створіть веб-додаток, де він міг ввести нові для нього градуси в Цельсіях і отримати старі добрі Фаренгейти.
 * Додати перевірку введення користувача: якщо користувач вводить не число - повертати повідомлення про помилку та не виконувати жодних дій.
 */

 let temp = prompt('Enter temperature in Celsius:');

 const convertCelToFar = (temp) => {
   isNaN(temp)
     ? alert(`It's not valid value`)
     : alert(`Celsius converted to Fahrenheit is: ${temp = temp * 9/5 + 32}`);
 };
 convertCelToFar(temp);