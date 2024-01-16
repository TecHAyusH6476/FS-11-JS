// var sum = function (a, b) {}

let obj = {
  name: 'Ayush',
  job: 'SDE',
  fn: function () {
    console.log('hello')
  },
}

console.log(obj.name)
obj.fn()

let arr = [12, 34, 45, 65, 56]

const res = arr.map((val) => {
  return val * 2
})

console.log(res)
