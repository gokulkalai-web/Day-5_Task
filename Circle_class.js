class Circle{
  constructor(radius,color){
    this.radius = radius
    this.color = color
  }
  getRadius(){
    return this.radius
  }
  setRadius(radius){
    return this.radius = radius
  }
  getColor(){
    return this.color
  }
  setColor(color){
    return this.color = color
  }
  toString(){
    return `Circle[radius=${this.radius},color=${this.color}]`
  }
  getArea(){
    return 3.14 * this.radius**2
  }
  getCircumference(){
    return 2*3.14*this.radius
  }   
}
const obj1 =  new Circle(1.0,"red")
console.log(obj1.getRadius())
obj1.setRadius(2.0)
console.log(obj1.getColor())
obj1.setColor("white")
console.log(obj1.toString())
console.log(obj1.getArea())
console.log(obj1.getCircumference())