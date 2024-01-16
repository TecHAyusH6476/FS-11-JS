// substring in string

// subarray -> slice and splice

// slice

let arr1 = [23, 3, 23, 545, 54]
// syntax

// slice(start,end)  ->return shallow copy  (end exclusive)

// original array no change

let new_arr = arr1.slice(0, 2)

// console.log(new_arr)
// console.log(arr1)

let arr2 = [12, 34, 5, 643, 34]
// splice(start_index,num of del_element,arg1,arg2,...)

let remove = arr2.splice(1, 2, 'hello', 'world') // index=1 and remove 2 element

console.log(remove)
console.log(arr2)
