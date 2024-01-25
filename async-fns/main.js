console.log('Start of code !!')
setTimeout(() => {
  console.log('First aysnc process!!!') // 0
}, 6000)

// 3 micro que task
// async op
// promise res method
Promise.resolve()
  .then(() => {
    console.log('First Micro queue task!!')
    return Promise.resolve()
  })
  .then(() => {
    console.log('Second Micro queue task!!')
    return Promise.resolve()
  })
  .then(() => {
    console.log('Last Micro queue task!!')
  })

setTimeout(() => {
  console.log('Second aysnc process!!!')
}, 3000)

let eg = () => console.log('this is a fn')

eg()
// promise res method
Promise.resolve()
  .then(() => {
    console.log('First Micro queue task!!')
    return Promise.resolve()
  })
  .then(() => {
    console.log('Second Micro queue task!!')
    return Promise.resolve()
  })
  .then(() => {
    console.log('Last Micro queue task!!')
  })

console.log('end of complete process!!')
