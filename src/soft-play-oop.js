// TODO: Write your class in this file
class SoftPlay {
  constructor() {
    this.numAdults = 0;
    this.numChildren = 0;
  }

  enter(adults, children) {
    if (adults >= children) {
      this.numAdults += adults;
      this.numChildren += children;
      return true;
    } else {
      return false;
    }
  }

  leave(adults, children) {
    if (
      adults >= children &&
      adults > 0 &&
      this.numAdults > this.numChildren &&
      this.numAdults >= adults &&
      this.numChildren >= children
    ) {
      this.numAdults -= adults;
      this.numChildren -= children;
      return true;
    } else {
      return false;
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
