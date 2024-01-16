// callback = (val) => {  val =12
//     return val * 2
//   }

Array.prototype.myMap = function (callback) {
  const newArray = []
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    // this = arr
    let tempVal = callback(this[i], i, this) // processing the val   // arr[i] = 34      tempval=68
    newArray.push(tempVal) //[24,68,108, 92]
  }
  // Only change code above this line
  return newArray
}

let arr = [1, 1, 2, 5, 2]
// arr elements value *2
const res = arr.myMap((element, index, array) => {
  return array[index + 1] || array[0]
})

console.log(res)
