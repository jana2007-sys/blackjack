//Math.random()*6  generates random number between 0->5.999....
//Math.floor() removes decimal for eg 12.9999->12
let cards=[]
let sum=0
let hasblackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")//another method
let cardsEl=document.querySelector("#cards-el")
let player = {
    name: "Jana",
    chips: 150/*,we can also define function for example
    sayhello:function jana(){
    console.log("say hello")
    
    player.sayhello() we should call like this
    */
}

let playerEl = document.querySelector(".player-el")

playerEl.textContent = player.name + ": $" + player.chips
function getRandomcard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber==1){
        return 11
    }
    else{
        return randomNumber
    }
}
function startGame(){
    isAlive=true
    let firstcard=getRandomcard()
    let secondcard=getRandomcard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
   

    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum : "+sum
    if(sum<21){
    message="Do you want to draw a new card?"
}
else if(sum===21){//we use === to strictly use 21 not "21"
    message="you've got Blackjack!"
    hasblackJack=true

}
else{
    message="you lost the game"
    isAlive=false
}
messageEl.textContent=message
}
function newCard(){
    if(isAlive==true && hasblackJack==false){
        let newcard=getRandomcard()
        sum+=newcard
        cards.push(newcard)
        renderGame()
    }

}


