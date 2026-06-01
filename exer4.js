class Temperatura {
  #celsius = 0;

  get celsius() {
    return this.#celsius;
  }
  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }
  get kelvin() {
    return this.#celsius + 273.15;
  }

  set fahrenheit(value) {
    this.#celsius = ((value - 32) * 5) / 9;
  }

  set kelvin(value) {
    this.#celsius = value - 273.15;
  }
}
