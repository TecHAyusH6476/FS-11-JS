rows = 5

// line change or rows
for (let i = 1; i <= rows; i++) {
  //   console.log(i)  // line change

  for (let k = 1; k <= rows - i; k++) {
    process.stdout.write(' ')
  }

  //   according to i
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write(j.toString()) // param string only constraint
  }

  console.log()
}
