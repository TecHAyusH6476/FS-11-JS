// // for each
// let arr = [12, 34, 56, 65]

// function print(val, ind) {
//   console.log('index = ', ind, ' value = ', val)
// }
// // print is expected
// arr.forEach(function (val, ind) {
//   console.log('index = ', ind, ' value = ', val)
// })

// HOF

function greet(name) {
  return `hello ${name}`
}

// HOF
function processHOF(fn1, name) {
  // process name
  let op = fn1(name)
  console.log(op)
}

processHOF(greet, 'John')
