const qns = [
  {
    quest: 'what is the capital of Japan?',
    ans: 'tokyo',
    options: ['paris', 'tokyo', 'delhi', 'london'],
  },
  {
    quest: 'what is the capital of France?',
    ans: 'paris',
    options: ['paris', 'tokyo', 'delhi', 'lucknow'],
  },
]

// function define
const displayQns = () => {
  let quizContainer = document.getElementById('quiz')
  qns.forEach((obj, index) => {
    const question_element = document.createElement('div')
    question_element.innerHTML = `
    <p>
    Question ${index + 1}: ${obj.quest}    
    </p>
    <label>
        <input type="radio" name="${index}" value="${obj.options[0]}">
        ${obj.options[0]}
    </label>
    <label>
        <input type="radio" name="${index}" value="${obj.options[1]}">
        ${obj.options[1]}
    </label>
    <label>
        <input type="radio" name="${index}" value="${obj.options[2]}">
        ${obj.options[2]}
    </label>
    <label>
        <input type="radio" name="${index}" value="${obj.options[3]}">
        ${obj.options[3]}
    </label>
        `

    quizContainer.appendChild(question_element)
  })
}

const submitQuiz = () => {
  let quizContainer = document.getElementById('quiz')
  const resContainer = document.getElementById('res')
  userAns = []

  qns.forEach((obj, index) => {
    const selectedOption = document.querySelector(
      `input[name="${index}"]:checked`
    )

    userAns.push(selectedOption.value)
  })
  console.log(userAns)
  const correctAnsArray = qns.filter((obj, ind) => {
    console.log(obj.ans, ' --', userAns[ind])
    return obj.ans == userAns[ind]
  })

  console.log(correctAnsArray)

  const score = correctAnsArray.length * 10

  resContainer.innerHTML = `
  <h1>Your score !!</h1>
  <p>you got ${score} score</p>
  `
}

// function call
displayQns()
