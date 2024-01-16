// methods in array in js

// push and pop

// console.log('length of names = ', names.length)
// insert the element in the last
// push(arg1,arg2,......)

let names = ['java', 'js', 'go', 'python'] // 4
names.push(12, 'tony stark', 'captian america') // 7
names.push([12, 'tony stark', 'captian america'], 56) // 7+2 = 9

// array
console.log(names) // 9

// returns and removes the last element from array
let del_element = names.pop() // 56
names.pop() //  [ 12, 'tony stark', 'captian america'
names.pop() //  'captian america'

// after pop
console.log(names) // 6 -> [ 'java', 'js', 'go', 'python', 12, 'tony stark' ]

// shift and  unshift   -> first place

names.unshift('hawkeye', 'tony stark', 'captian america')
console.log(names) //
let first_ele = names.shift()

console.log(first_ele)
