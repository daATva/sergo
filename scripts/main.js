const  dino = document.getElementById("dino")
const  kg50 = document.getElementById("kg50")
const  getScore = document.getElementById("game-score")
let score = 0
let kg50Left = parseInt(window.getComputedStyle(kg50).getPropertyValue('left'))


document.addEventListener("touchstart", function(event){
    jump();
    score++
    document.getElementById("game-score").innerHTML = score; 
 
    // let checkInterval = setInterval (function(){
    //  document.getElementById("game-score").innerHTML = score; 
    //  if(kg50Left >= 560){
    //     score++
    // }
    // },1000)
    if(score == 21) {
    if(confirm('Поздравляю ёпти с 21 чем - то летием . Тебе 21 ?')){

    // Вопрос 2
    let answer1 = prompt("Сколько йоьске нужно закрыть , чтобы он смог лечь на даванчик");
    if (answer1.toUpperCase() === "50") {
    score++;
    }
    
    // Вопрос 2
    let answer2 = prompt("Почему йоська меня выгоняет ?");
    if (answer2.toUpperCase() === "Не его проблемы") {
    score++;
    }


    // Вопрос 3
    let answer3 = prompt("  1,5 Серёги за 1,5 минуты  чинят 1,5 девятки. Вопрос: сколько девяток  за 9 минут починят 9 Серёг? ");
    if (answer3.toUpperCase() === "54") {
    alert('Нифига блин ты умный!!.')
        
    }
        }

    alert('Кароче мне в падлу , было чёт мутить и чекенить , напиши мне в тг. Если дошёл до сюда . А если сразу нажал на нет . То надо 21 очко набрать . дурак блин!')

    }
}) 

function jump () {
    if(dino.classList != 'jump'){
        dino.classList.add('jump')
    }
    setTimeout(function(){
        dino.classList.remove('jump')
    } ,300)
}

let isAlive = setInterval ( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let kg50Left = parseInt(window.getComputedStyle(kg50).getPropertyValue('left'))
    

    if(kg50Left < 57 && kg50Left > 40 && dinoTop >= -20) {
        score = 0
        alert('Чёт ты не зачекенил , арбуз в весок попал . Не баг , а фича если , что за тапы по экрану , тоже дают очки')
    }
  
},10)

// let counter = setInterval ( function(){

//        if(isAlive == 1){
         
//        }
// },500)

let check = setInterval ( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let kg50Left = parseInt(window.getComputedStyle(kg50).getPropertyValue('left'))
    console.log(dinoTop)
    console.log(kg50Left)
    console.log(isAlive)
},1000)
