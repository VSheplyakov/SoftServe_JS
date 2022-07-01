/**
 * 5. Золотий пісок

    Співробітники заводу із виробництва золотого піску з повітря вирішили поправити своє фінансове становище. Вони пробралися на склад заводу, де зберігався золотий пісок трьох видів. Один кілограм золотого піску першого виду вони змогли б продати за A1 гривень, другого – за A2 гривень, а третього виду – за A3 гривень. Так вийшло, що у співробітників виявилося із собою лише три ємності: перша була розрахована на B1 кілограм вантажу, друга на B2 кілограм, а третя на B3 кілограм. Їм треба було повністю заповнити всі ємності таким чином, щоб отримати якомога більше грошей за весь пісок. При заповненні ємностей не можна змішувати пісок різних видів, тобто в одну ємність поміщати більше одного виду піску і заповнювати ємності піском так, щоб один вид піску знаходився більш ніж в одній ємності.

    Потрібно написати програму, яка визначає, яку суму заповзятливі співробітники зможуть продати весь пісок у разі найкращого собі заповнення ємностей піском.

    Вхідні дані 6 натуральних чисел A1, A2, A3, B1, B2, B3. Усі числа не перевищують 100.

    Вихідні дані Єдине ціле число – суму у гривнях, яку зможуть співробітники заробити у разі найкращого для себе заповнення ємностей піском.
 */

function sort(price, capacity) {
  const priceSotrtArr = price.sort((a, b) => b - a);
  const capacitySortArr = capacity.sort((a, b) => b - a);
  
  let bestResult = 0;

  for (let i = 0; i < priceSotrtArr.length; i++) {
    bestResult += priceSotrtArr[i] * capacitySortArr[i];
  }
  return bestResult;
}
 sortArr


const price = ['5', 1, '2'];
const capacity = [1, 2, 3];

console.log(sort(price, capacity));
