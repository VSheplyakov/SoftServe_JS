/**
 * Додаткове (за бажанням) 4. Ремонт

Ваш улюблений дядько – директор фірми, яка робить євроремонти в офісах. У зв'язку з фінансово-економічною кризою, дядечко вирішив оптимізувати своє підприємство. Давно ходять чутки, що бригадир у дядеччиній фірмі купує зайву кількість будматеріалів, а залишки використовує для обробки своєї нової дачі. Ваш дядько зацікавився, скільки банок фарби необхідно для фарбування стін в офісі довжиною L метрів, шириною - W і висотою - H, якщо однієї банки вистачає на 16м2, а розмірами дверей і вікон можна знехтувати? Замовлень багато, тому дядько попросив написати програму, яка все це рахуватиме.

Вхідні дані три натуральні числа L, W, H – довжину, ширину та висоту офісу в метрах відповідно, кожне з яких не перевищує 1000.

Вихідні дані мінімальна кількість банок фарби, необхідні для фарбування стін в офісі.
*/
// lenght - l 0-1000
// weight - w 0-1000
// h - 0-1000

function countCanOfPaint() {
  const oneCanOfPaint = 16;
  const l = Number(document.querySelector('.hero__input-l'));
  const w = parseInt(document.querySelector('.hero__input-w'));
  const h = Number(document.querySelector('.hero__input-h'));
  const outputValue = document.querySelector('.hero__reply-value');
  console.log(typeof l)
  console.log(l) 
  console.log(typeof w)
  console.log(w) 
  const result = Math.ceil((l + w) * h / oneCanOfPaint);

  outputValue.innerHTML = `Для пофарбування заданого приміщення необхідно - ${result}`;
}
countCanOfPaint();
