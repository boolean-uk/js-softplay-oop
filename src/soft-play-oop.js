// TODO: Write your class in this file

class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }
  occupancy() {
    return {
      adults: this.adults,
      children: this.children,
    };
  }
  enter(numAdults, numChildren) {
    // guard clause
    if (numAdults < numChildren) return false;

    this.adults += numAdults;
    this.children += numChildren;
    this.occupancy();
    return true;
  }
  leave(numAdults, numChildren) {
    if (numAdults < numChildren) return false;
    if (this.adults - numAdults < this.children - numChildren) return false;
    if (numAdults > this.adults || numChildren > this.children) return false;

    this.adults -= numAdults;
    this.children -= numChildren;
    return true;
  }
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
};
