// indexof and lastindexof()

// first occurence and last occurence of element
let arr = [23, 4, 3, 'hello', 4545]

let first_occ_of_3 = arr.indexOf('hello') // 3
let last_occ_of_3 = arr.lastIndexOf('hello') // 3

// console.log(first_occ_of_3) // 3
// console.log(last_occ_of_3) // 5

let str1 = 'hello'

// JS
// spread operator  (...)

let arr2 = [34, 34] //  [[23, 4, 3, 'hello', 4545],34,34]
let arr3 = [...arr, 12, 34, 'tony'] //  [23, 4, 3, 'hello', 4545,12, 34, 'tony']

// concat method   -> joins two array
let new_Arr = arr.concat(arr2)
console.log(new_Arr) // [ 23, 4, 3, 'hello', 4545, 34, 34 ]

let new_concat = [23, 4, 3, 'hello', 4545, 34, 34] // [ 23, 4, 3, 'hello', 4545, 34, 34 ]

console.log(new_concat)
