// slice in array

// syntax

// slice(start_index,end_index) // end_index (exclusive)
// slice(start_index)
// slice()

// 1. original Array no change
// 2. return shallow copy -> exact ref

let arr = [23, 54, 6, 34, 45]

let sub_arr = arr.slice(1, 3) // [arr[1],arr[2]]

// console.log('sliced arr = ', sub_arr)
// console.log('original array = ', arr)

let sub_arr2 = arr.slice(3, 5)
let sub_arr3 = arr.slice(3)

let sub_arr4 = arr.slice() // copy of arr
console.log('copy', sub_arr4)
console.log(arr)
