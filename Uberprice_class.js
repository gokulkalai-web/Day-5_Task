class Uberprice {
  constructor(baseFare,distanceFar,perMinuteFar){
    this.baseFare = baseFare;
    this.distanceFar = distanceFar;
    this.perMinuteFar = perMinuteFar;
  }
    
  getTotalPrice(distance,minutes){
    return this.baseFare + this.distanceFar * distance + this.perMinuteFar * minutes
  }
}

const priceCalculation = new Uberprice(100,5,2)
console.log(priceCalculation.getTotalPrice(20,30))