
class Cat {
  constructor(name, tiredness = 0, hunger = 10, loneliness = 10, happiness = 0) {
    this.name = name;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
  }
  normalizeValue(val) {
   if (val < 0) {
       return 0;
   }
   if (val > 10) {
       return 10;
   }
   return val;
  }
  play(val = 1) {
    this.loneliness = this.normalizeValue(this.loneliness - val);
    this.happiness = this.normalizeValue(this.happiness + val);
  }
  feed(val = 1) {
    this.hunger = this.normalizeValue(this.hunger - val);
  }
  pet(val = 1) {
    this.loneliness = this.normalizeValue(this.loneliness - val);
  }
  sleep(val = 1) {
    this.tiredness = this.normalizeValue(this.tiredness - val);
  }
  getStatus() {
    return {
      hungry: this.hunger < 5,
      happy: this.happiness > 5
    }
  }
  toString() {
    const status = this.getStatus();
    return Object.keys(status).map(k => {
      const state = status[k] ? "is" : "is very";
      return `${this.name} ${state} ${k}`;
    }).join(". ") + ".";
  }
}

const paws = new Cat("paws");
 paws.feed(8)
console.log(paws.toString());



