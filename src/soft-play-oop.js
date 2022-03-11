// TODO: Write your class in this file

class SoftPlay {
  constructor (numberOfAdults, numberOfChildren) {
    this.adults = 0
    this.children = 0
  }

  occupancy () {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  enter (numberOfAdults, numberOfChildren) {
    if (numberOfAdults < numberOfChildren) {
      return false
    } else {
      this.adults += numberOfAdults
      this.children += numberOfChildren
      return true
    }
  }

  leave (numberOfAdults, numberOfChildren) {

      const childrenInside = this.children - numberOfChildren;
      const adultsInside = this.adults - numberOfAdults;

    if (numberOfChildren > numberOfAdults) {
      return false
    }
    if (childrenInside > adultsInside) {
      return false
    }
    if (numberOfChildren > numberOfAdults) {
      return false
    }
    if (numberOfChildren > this.children || numberOfAdults > this.adults ) {
      return false
    }
    else
      this.adults -= numberOfAdults
      this.children -= numberOfChildren
      return true
  }
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
