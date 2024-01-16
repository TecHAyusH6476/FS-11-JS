// splice in array
// 1. changes the original Array
// 2. syntax changes (we are not using second_index)

// Syntax

// splice(start_index,number_of_elements_to_remove , arg1,arg2,arg3,..)   // 3rd param -> elements to be added
// splice(start_index)
// splice(start_index,number_of_elements_to_remove)

let arr = [34, 45, 46, 23, 545]

// let spliced_arr1 = arr.splice(2, 1) // [46, 23, 545]

// console.log(spliced_arr1)
// console.log(arr)

// let spliced_arr2 = arr.splice(2, 2, 'hello', 'tony')
// console.log(spliced_arr2)
// console.log(arr)

// negative index in array in js

let spliced_arr3 = arr.splice(0) // returns 2nd index - last element
console.log(spliced_arr3)
console.log(arr)
