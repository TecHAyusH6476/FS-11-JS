// DOM -> events -> to interact with user
let btn = document.getElementById('btn')
let p = document.getElementsByClassName('hide')[0]

btn.addEventListener('click', () => {
  // p.style.display = 'inline'
  p.classList.toggle('hide')

  console.log(p.classList)

  //attributes

  // p.style.display = 'none'
})
