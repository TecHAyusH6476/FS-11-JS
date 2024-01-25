// api call ->
// ajax call ->

// create a promise obj
let myPObj = new Promise((res, rej) => {
  // async op

  let opIsSuccessfull = false

  if (opIsSuccessfull) {
    res('op is working!!')
  } else {
    rej('op is failed')
  }
})

// handle promise

myPObj
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
