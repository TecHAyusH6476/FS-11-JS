const promise1 = new Promise((res, rej) => {
  if (false) {
    // false
    res('1st promise obj')
  } else {
    rej('some err!!')
  }
})
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'))
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'))

// promise is immuable object
const promises = [promise1, promise2, promise3]

Promise.any(promises)
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .catch((value) => console.log(value))

//   all promises are in rej state??
