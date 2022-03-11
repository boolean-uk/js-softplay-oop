class SoftPlay {
  adults;
  children;
  constructor() {
    this.adults = 0;
    this.children = 0;
  }

  enter = (numAdults, numChildren) => {
    if (numAdults <= 0) return false;

    this.adults += numAdults;
    this.children += numChildren;
    return true;
  };

  leave = (numAdults, numChildren) => {
    if (numAdults <= 0) return false;
    if (numAdults > this.adults || numChildren > this.children) return false;
    if (this.adults - numAdults < this.children - numChildren) return false;

    this.adults -= numAdults;
    this.children -= numChildren;
    return true;
  };

  occupancy = () => {
    return { adults: this.adults, children: this.children };
  };
}

module.exports = SoftPlay;
