// TODO: Write your class in this file
class SoftPlay {
  constructor (maxOccupancy) {
    this.numAdults = 0;
    this.numChildren = 0;
    this.maxOccupancy = maxOccupancy || false
  }

  occupancy () {
    return {
      adults: this.numAdults,
      children: this.numChildren,
    };
  }
  
  capacity (adults, children) {
      if (this.maxOccupancy === false) return true;
  
      return (
        this.numChildren + children + this.numAdults + adults <= this.maxOccupancy
      );
  }

  enter (adults, children,) {
    if (adults < children) return false;
    if (!this.capacity(adults, children)) return false;
    
      this.numAdults += adults;
      this.numChildren += children;
      return true;
    }
  

  leave (adults, children) {
    if (adults <= 0) return false;
    if (adults > this.numAdults || children > this.numChildren) return false;
    if (this.numAdults - adults < this.numChildren - children) return false;
      
    this.numAdults -= adults;
    this.numChildren -= children;
    return true;
  }
}


// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
}
