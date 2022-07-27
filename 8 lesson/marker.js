/**
 * Маркер
Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнила в маркері (у відсотках);
метод друку (метод приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
Додаткове завдання:
Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів
 */

class Marker {
  constructor(color, countOfToner) {
    this.color = `#` + color;
    this.countOfToner = countOfToner + `%`;
  }

  print(text) {
    text.color = this.color;
    let q;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') 
      q += 1;
    }
    return (this.countOfToner = this.countOfToner - q * 0.5);
  }
}
