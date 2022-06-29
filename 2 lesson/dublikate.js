/**
 *  Кількість дублікатів* ускладнене, додаткове
 * 
 * Напишіть функцію, яка повертатиме кількість окремих нечутливих до регістру символів алфавіту та числових цифр, які зустрічаються у вхідному рядку більше одного разу.
 * Можна припустити, що вхідний рядок містить лише алфавіти (як у верхньому, так і в нижньому регістрі) та числові цифри.
 * 
 * Приклад:
 * 
 * "abcde" -> 0
 * "aabbcde" -> 2 # 'a' та 'b'
 * "aabBcde" -> 2 # 'a' двічі та 'b' двічі (`b` та `B`)
 * "indivisibility" -> 1 # 'i' 6 разів
 * "Indivisibilities" -> 2 # 'i' 7 разів 's' 6
 * "aA11" -> 2 # 'a' та '1'
 * "ABBA" -> 2 # 'A' та 'B' 
 */

const enterStr = 'aaAbbcd'
const str = enterStr.toLocaleLowerCase();
const strArr = str.split('');
const res = strArr.reduce((acc, cur) => {
    if (acc[cur] === undefined) {
        acc[cur] = 1;
    } else {
        acc[cur]++;
    }
    return acc;
}, new Object());

console.log(res)

    
// let entries = Object.entries(res)
// console.log(entries);

// let data = entries.map( ([key, val] = entry) => {
//     if (entries.val > 1){
//         return `The ${key} is ${val}`;
//     }
// //   return `The ${key} is ${val}`;
// });
//  console.log(data);














