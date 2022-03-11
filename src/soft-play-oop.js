// TODO: Write your class in this file

// - program that maintains counts of both the number of children and adults inside a soft play center, using a class

// Class should have the following methods (functions):

// 1) // SoftPlay#occupancy() - returning an object {} with two keys - 'adults' & 'children'

// 2) SoftPlay#enter(numAdults, numChildren) - This function is used to register adults and children entering the soft play center. Every child entering the soft play center is accompanied by at least 1 adult. If any of these checks fail, the function should return false. Otherwise, the function should return true and numAdults and numChildren should be added to the current totals.

// 3) SoftPlay#leave(numAdults, numChildren) - The function should check for the following conditions:

// A child is not attempting to leave without an adult
// The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
// Every child leaving the soft play center is accompanied by at least 1 adult.
// The number of adults and children attempting to leave is not greater than the number currently inside the center
// If any of these checks fail, function should return false. Otherwise, the function should return true and numAdults and numChildren should be deducted from the current totals.
// let softPlay = new SoftPlay();

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
    if (numAdults < numChildren) {
      return false;
    } else {
      // this.adults = this.adults + numAdults - same as below
      this.adults += numAdults; // increment this.adults by numAdults
      this.children += numChildren;
      return true;
    }
  }

  leave(numAdults, numChildren) {
    const expectedAdultCount = this.adults - numAdults;
    const expectedChildCount = this.children - numChildren;

    if (numChildren > numAdults) {
      return false;
    } else if (expectedChildCount > expectedAdultCount) {
      return false;
    } else if (expectedAdultCount < 0 || expectedChildCount < 0) {
      return false;
    } else {
      this.adults -= numAdults;
      this.children -= numChildren;
      return true;
    }
  }
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
};
