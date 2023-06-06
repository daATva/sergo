const  dino = document.getElementById("dino")
const  kg50 = document.getElementById("kg50")
const  getScore = document.getElementById("game-score")
let score = 0
let kg50Left = parseInt(window.getComputedStyle(kg50).getPropertyValue('left'))


document.addEventListener("keydown" , function(event){
    jump();
    score++
    document.getElementById("game-score").innerHTML = score; 
 
    // let checkInterval = setInterval (function(){
    //  document.getElementById("game-score").innerHTML = score; 
    //  if(kg50Left >= 560){
    //     score++
    // }
    // },1000)
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
        

        alert('Ты не закрыл 50 , попробуй через 2 недели')
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
