// API Key - scecret or keys we put that in config

// 2nd way
// fetch(resource, options)

// Options -> headers , auth , CORS

// access elements
const btn = document.querySelector('#btn')
const jokes_para = document.querySelector('#joke')

// options object for API call ( methods(GET,PUT,POST),headers,content-type ..)
const optObj = {
  headers: { 'X-Api-Key': 'evdXHCEZz3Ti/kjMQxb6fA==lF3ukViGUQrQuQWb' },
}

// 1 -> using then (promises)
// const apiCallToGetJokes = (url, options) => {
//   // to show while api is calling/ getting res from server
//   jokes_para.innerText = 'Updating.....'
//   btn.innerText = 'Loading.....'

//   fetch(url, options)
//     .then((response) => {
//       const apiData = response.json() // to convert the res to object
//       return apiData
//     })
//     .then((apiData) => {
//       // DOM manipulation
//       let jokeToRender = ''
//       // edge case to handle on empty array in API call
//       if (apiData.length > 0) {
//         jokeToRender = apiData[0]['joke']
//       } else {
//         jokeToRender = 'No jokes available'
//       }

//       // updating the paragraph with API call res (joke)
//       jokes_para.innerText = jokeToRender

//       // to update the btn when we got the API res
//       btn.innerText = 'Tell me a joke'
//     })
//     .catch((err) => {
//       alert(err)
//     })
// }

// 2. Async await calling api

const asyncApiCallToGetJokes = async (url, options) => {
  try {
    // to show while api is calling/ getting res from server
    jokes_para.innerText = 'Updating.....'
    btn.innerText = 'Loading.....'

    const apiRes = await fetch(url, options) // response

    const apiData = await apiRes.json() // convert to json object

    // DOM manipulation
    let jokeToRender = ''
    // edge case to handle on empty array in API call
    if (apiData.length > 0) {
      jokeToRender = apiData[0]['joke']
    } else {
      jokeToRender = 'No jokes available'
    }

    // updating the paragraph with API call res (joke)
    jokes_para.innerText = jokeToRender

    // to update the btn when we got the API res
    btn.innerText = 'Tell me a joke'
  } catch (error) {
    alert(error)
  }
}

btn.addEventListener('click', () => {
  //   apiCallToGetJokes('https://api.api-ninjas.com/v1/dadjokes', optObj)
  asyncApiCallToGetJokes('https://api.api-ninjas.com/v1/dadjokes', optObj)
})
