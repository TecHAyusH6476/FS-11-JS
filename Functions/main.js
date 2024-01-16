function print() {
  console.log('Log function worked!!')
}

function sum(a, b) {
  // nested function
  let sum = a + b
  print()
  console.log('Sum = ', sum)
}

sum(23, 56) // F1   -> F2
