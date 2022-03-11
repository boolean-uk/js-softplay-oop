// TODO: Write your class in this file
class SoftPlay {
  constructor() {
    this.numAdults = 0;
    this.numChildren = 0;
  }

  enter(adults, children) {
    if (adults < children) {
      return false;
    } else {
      this.numAdults += adults;
      this.numChildren += children;
      return true;
    }
  }

  leave(adults, children) {
    if (adults <= 0) {
      return false;
    } else if (adults > this.numAdults || children > this.numChildren) {
      return false;
    } else if (this.numAdults - adults < this.numChildren - children) {
      return false;
    } else {
      this.numAdults -= adults;
      this.numChildren -= children;
      return true;
    }
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren,
    };
  }
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
};
