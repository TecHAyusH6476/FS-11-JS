// console.log('start!!')

const fetchData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Fetched api data !!!')
      res({ data: 'Api datas' }) // resolve(val1,val1)    -> then((val1,val2)=>{})
    }, 2000)
  })
}

const processData = (arg1) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('processing api data !!!')
      res(arg1 + ' processed')
    }, 3000)
  })
}

// implementation of api call

fetchData() // return promise object
  .then((result) => {
    return processData(result.data)
  })
  .then((processresult) => {
    console.log(processresult)
  })
