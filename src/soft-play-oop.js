// TODO: Write your class in this file

// You need to write a program that maintains counts of both the number of children and adults inside a soft play center, using a class inside the src/soft-play-oop.js file. Your class should have the following methods:
// SoftPlay#occupancy(), SoftPlay#enter(numAdults, numChildren), SoftPlay#leave(numAdults, numChildren)
// SoftPlay#occupancy() This function should return an object with two keys - adults should contain the number of adults currently inside the soft play center and children the number of children.
// This function is used to register adults and children entering the soft play center. The function should check for the following conditions:
// Every child entering the soft play center is accompanied by at least 1 adult.
// If any of these checks fail, the function should return false. Otherwise, the function should return true and numAdults and numChildren should be added to the current totals.
// This function is used to register adults and children leaving the soft play center. The function should check for the following conditions:
// A child is not attempting to leave without an adult
// The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
// Every child leaving the soft play center is accompanied by at least 1 adult.
// The number of adults and children attempting to leave is not greater than the number currently inside the center

class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }
  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }
  enter(numAdults, numChildren) {
    // under what conditions
    if (numAdults >= numChildren){
      this.adults += numAdults;
      this.children += numChildren;
      console.log(this.occupancy())
    return true} 
    else{
      return false
    }
  }

  leave(numAdults, numChildren) {
    // under what conditions
    if (numAdults !== 0){
      if(this.adults - numAdults < this.children - numChildren) {
        return false
      }
      if(this.adults < numAdults || this.children < numChildren) {
        return false
      }
      this.adults -= numAdults;
      this.children -= numChildren;
      return true
    } 
    else{
      return false
    }
  }
}

// this.Adults is number of adults in the play area
// this.Children is number of children in the play area
// numAdults is number of adults trying to enter or leave
// numChildren is number of children trying to enter or leave

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
