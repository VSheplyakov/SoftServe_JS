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
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this.radius;
  }

  set radius(newRadius) {
    return (this.radius = newRadius);
  }

  get diametr() {
    return this.radius * 2;
  }

  areaCircle() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  lengthCircle() {
    return 2 * Math.PI * this.radius;
  }
}
