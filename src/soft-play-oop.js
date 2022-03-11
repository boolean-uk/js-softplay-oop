// TODO: Write your class in this file

// main class
class SoftPlay {
  // constructor
  constructor() {
    this.adults = 0;
    this.children = 0;
  }
  // class to store arrays
  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }
  // class to describe enter
  enter(numAdults, numChildren, maxOccupancy, childrenPerAdult) {
    // under what conditions
    // number of adults entering the play center should be equal or more the number of children
    if (numAdults >= numChildren / childrenPerAdult){
      this.adults += numAdults;
      this.children += numChildren;
      this.adults + this.children <= maxOccupancy
      return true} 
    else{
      return false
    }
  }
  // class to describe leave

  leave(numAdults, numChildren, childrenPerAdult) {
    // under what conditions
    // number of adults in play area should never be below number of children
    // number of adults or children leaving should not be more than the number of adults or children at the play center
    if (numAdults !== 0){
      if(this.adults < numAdults || this.children < numChildren) {return false}
      if((this.adults - numAdults) * childrenPerAdult < this.children - numChildren) {return false}
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
