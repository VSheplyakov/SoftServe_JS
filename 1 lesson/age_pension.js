/**
 *   2. Пенсія
 *   Створіть веб-аплікацію, яка питає у користувача його вік та виводить скільки йому залишилось до пенсії та в якому році вона настане.
 *   Приклад:
 *   --> 30
 *   <-- 35, 2057
 *   --> 1
 *   <-- 64, 2086
 */

const pension = (age) => {
  const pensionAge = 65;
  let currentDate = new Date();
  let pensionYearIs = currentDate.getFullYear() - age + pensionAge;
  let yearsToPension = pensionAge - age;
  console.log(`${yearsToPension}, ${pensionYearIs}`);
};

pension(1);



