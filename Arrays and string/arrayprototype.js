// Every object has its prototype in js
// array is object

// function/method overriding

// custom method
// genric function
Array.prototype.sum1 = function () {
  let sum = 0
  for (let i = 0; i < this.length; i++) {
    sum += this[i]
  }
  return sum
}

let arr = [12, 2, 34, 556]
let sum_of_array = arr.sum1()
console.log(sum_of_array)

let arr2 = [1, 2, 4]

console.log(arr2.sum1())



arr.concat
