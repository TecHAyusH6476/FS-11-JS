let arr = [12, 344, 45, 56, 12]

// 2nd reduce using
max = arr.reduce((acc, curr_val) => {
  acc = Math.max(acc, curr_val)
  return acc // acc
})

console.log(max)
