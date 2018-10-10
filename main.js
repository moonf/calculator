const buttons = document.querySelectorAll('.buttons button')
const result = document.getElementById('result')

let res = ''

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === 'C') {
      res = ''
      result.innerText = '0'
    } else if (button.innerText !== '=') {
      res += button.innerText
      result.innerText = res
    } else {
      result.innerText = eval(res)
    }
  })
})

