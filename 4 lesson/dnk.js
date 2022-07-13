/**
 * 3. ДНК
 * Дезоксирибонуклеїнова кислота (ДНК) — це хімічна речовина, що міститься в ядрі клітин і несе «інструкції» для розвитку та функціонування живих організмів.
 * Якщо ви хочете дізнатися більше, http://en.wikipedia.org/wiki/DNA
 * У рядках ДНК символи «А» і «Т» доповнюють один одного, як «С» і «G». У вас є функція з однією стороною ДНК - вам потрібно отримати іншу комплементарну сторону.
 * Нитку ДНК ніколи не буває порожнім або ДНК взагалі немає.
 *
 * Приклад:
 *
 * DNA_strand("ATTGC") # повертає "TAACG"
 * DNA_strand("GTAT") # повертає "CATA"
 */

// function dna(str) {
//   str = str.toLowerCase();
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a') {
//       result += 't';
//     } else if (str[i] === 't') {
//       result += 'a';
//     } else if (str[i] === 'g') {
//       result += 'c';
//     } else if (str[i] === 'c') {
//       result += 'g';
//     }
//   }
//   console.log(result.toUpperCase());
// }

// dna('ATTGCGTATaaaaA');

function dna(str) {
  str = str.toLowerCase();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    str[i] === 'a'
      ? result += 't'
      : str[i] === 't'
      ? result += 'a'
      : str[i] === 'g'
      ? result += 'c'
      : str[i] === 'c'
      ? result += 'g'
      : result;
  }
  console.log(result.toUpperCase());
}

dna('ATTGCGTATaaaaA');
