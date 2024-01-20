// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties(keys) with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let objCalc = {
  // takes 2 input using prompt an save to a and b
  read: function () {
    this.a = prompt('Enter a value') // string  -> null
    if (this.a == null) {
      alert('please enter a value')
    }
    this.b = parseInt(prompt('Enter b value')) // string
  },
  sum: function () {
    let sum = this.a + this.b
    return sum
  },
  mul: function () {
    let product = this.a * this.b
    return product
  },
}

console.log(objCalc.a)
console.log(objCalc.b)
// function call is not done here
objCalc.read()

console.log(objCalc.a)
console.log(objCalc.b)
console.log(objCalc.sum())
console.log(objCalc.mul())
