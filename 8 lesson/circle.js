/** Коло
Реалізувати клас, що описує коло. У класі мають бути такі компоненти:

поле, що зберігає радіус кола;
get-властивість, що повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, що повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
Продемонструвати роботу властивостей та методів. */

class Circle {
  #radius = 0;
  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(newRadius) {
    this.#radius = newRadius;
  }

  get diametr() {
    return this.#radius * 2;
  }

  areaCircle() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  lengthCircle() {
    return 2 * Math.PI * this.#radius;
  }
}
const c = new Circle(10);
console.log(c.areaCircle());
console.log(c.lengthCircle());
console.log(c.diametr);
console.log(c.radius);
c.radius = 33;
console.log(c.diametr);
console.log(c.radius);
// console.log(c.#radius); 