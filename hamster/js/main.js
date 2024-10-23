let score = 0;
let money = 0
const hamster = document.getElementById('hamster')
const button = document.getElementById('button')
const scoreDisplay = document.getElementById('score')
const moneyDisplay = document.getElementById('money')
hamster.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Счет: ${score}`
})





button.addEventListener('click', () => {

    
    if (score >=10) {
        score=score-10
        money=money+1000000000
         scoreDisplay.textContent = `Счет: ${score}`
          moneyDisplay.textContent = `Ваши деньги: ${money}$`
    }
})