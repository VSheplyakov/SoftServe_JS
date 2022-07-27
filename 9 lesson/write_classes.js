// Класи
// Придумайте як описати та опишіть такі класи:

// Батарейка (>=3 властивості, >=1 метод)
// Стіл (>= 4 властивості, >= 0 методів)
// Двері (>= 3 властивості, >= 2 метода)
// Кондиціонер (>= 5 властивостей, >= 4 методи)

//batery
class Battery {
  #voltage = '1,5 V';
  constructor(voltage, type, capacity) {
    this.#voltage = voltage;
    this.type = type;
    this.capacity = capacity;
  }

  chargeInfo() {
    this.capacity > 95
      ? console.log (`${this.#voltage}`)
      : console.log('Battery is used');
  }
}

//table
class Table {
  constructor(width, height, length, material) {
    this.width = width;
    this.height = height;
    this.length = length;
    this.material = material;
  }
}

//door
class Door {
  constructor(width, height, style, material) {
    this.width = width;
    this.height = height;
    this.style = style;
    this.material = material;
  }
  open(){

  }

  close(){

  }

}

//cond
class Cond {
  #temperature;
  #userTemperature;;
  constructor(brand, temperature, userTemperature, fanSpped, fanType) {
    this.brand = brand;
    this.fanSpped = fanSpped;
    this.fanType = fanType;
    this.#temperature = temperature;
    this.#userTemperature = userTemperature;
    
  }
  getTemperature() {
    return this.#temperature;
  }
  setTemperature(newTemperature) {
    this.#userTemperature = newTemperature;
  }

  heat() {
    this.#temperature < this.#userTemperature
      ? console.log('WarmMode on')
      : console.log('WarmMode off');
  }
  cool() {
    this.temperature > this.#userTemperature
      ? console.log('CoolMode on')
      : console.log('CoolMode off');
  }
}

//write class Conditioner with 5 properties and 4 methods
