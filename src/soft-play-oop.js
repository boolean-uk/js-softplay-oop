// TODO: Write your class in this file

class SoftPlay {
  constructor(maxOccupancy) {
    this.adults = 0;
    this.children = 0;
    this.maxOccupancy = maxOccupancy || false;
    // max occupancy value or false
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children,
    };
  }

  haveCapacity(numAdults, numChildren) {
    // the default value for max occ if nothing is defined is false
    // so here if max occ = false (which it does if theres no argument passed in)
    // then return true - if you return true it means you have capacity if not
    // then the max occ argument will be used to see if there's capacity
    if (this.maxOccupancy === false) return true;

    return (
      this.children + numChildren + this.adults + numAdults <= this.maxOccupancy
    );
  }

  enter(numAdults, numChildren) {
    // guard clause
    if (numAdults < numChildren) return false;
    if (!this.haveCapacity(numAdults, numChildren)) return false;

    this.adults += numAdults;
    this.children += numChildren;

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
