// JS -> object based

// Object -> JS datatype

// JSON -> stringify

// 1. Dot (.) -> access update in object

// obj1.name = 'Tony stark'
// obj1.superpowers = 'Rich'
// obj1['region'] = 1

// 2 subscript []

// console.log(obj1.name)
// console.log(obj1.superpowers)

// console.log(obj1['name'])
// console.log(obj1['superpowers'])

// let obj1 = {
//   name: 'Tony',
//   rollno: 21,
//   is_graduated: false,
//   subs: ['eng', 'maths'],
// }
// console.log(obj1.subs)

// this keyword

// traverse objects

// object -> keys and values

// let keys = Object.keys(obj1)

// console.log(keys) // [ 'name', 'rollno', 'is_graduated', 'subs' ]

// for (let i = 0; i < keys.length; i++) {
//   console.log(obj1[keys[i]])
// }
let obj1 = {
  name: 'Tony',
  rollno: 21,
  is_graduated: false,
  subs: ['eng', 'maths'],
}

// for in
// for (let a in obj1) {
//   console.log(a, '= ', obj1[a])
// }

// for each
// forEach(fn(value,index,arr_name))
// let arr = [12, 3, 4, 465, 6]

// arr.forEach(function (val, index) {
//   console.log(index, '= ', val)
// })

let keys = Object.keys(obj1) // [ 'name', 'rollno', 'is_graduated', 'subs' ]
keys.forEach(function (a) {
  // traversal
  console.log(a, '= ', obj1[a])
})
