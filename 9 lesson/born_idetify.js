// Ідентифікація Борна
// Напишіть функцію, яка перевірятиме правильність введення даних:

// Серія та номер паспорта
// Номер телефону
// Ідентифікаційний код
// Вхідні дані:

// Рядок - цифробуквенний рядок, що відповідає за серію та номер паспорта
// Рядок - цифросимвольний рядок, що відповідає за номер телефону
// Рядок - рядок цифр, що відповідає за ідентифікаційний код
// Вихідні дані: Рядок, що описує, чи підходять введені дані під опис.

function identify(passport, phoneNumber, pin) {
  passport.length === 8 &&
  /[a-z]{2}[0-9]{6}/gi.test(passport)
    ? console.log(passport)
    : console.log('Passsport data uncorrect');
  phoneNumber.length === 12 && /[0-9]{12}/g.test(phoneNumber)
    ? console.log(phoneNumber)
    : console.log('Phone number data uncorrect');
  pin.length === 10 && /[0-9]{10}/g.test(pin)
    ? console.log(pin)
    : console.log('Pin data uncorrect');
}

identify('AA123456', '380673606010', '1234567890');
identify('A1123456', 'a80673606010', 'a234567890');
