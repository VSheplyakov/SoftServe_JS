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

let enterStr = 'Аabbcde'
let str = enterStr.toLocaleLowerCase();
let strArr = str.split('');
let result = strArr.forEach((strArr[i], i , i++))



console.log(strArr)
console.log(result)

//Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.