class person {
  constructor(name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  getpersondetails(){
    return `name: ${this.name} age: ${this.age} Height: ${this.height}cm weight: ${this.weight}`
  }
}
const obj = person("john",24,172,58)
obj.getpersondetails()