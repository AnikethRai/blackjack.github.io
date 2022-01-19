
let msg = document.getElementById("out")
let message = ''
let cards = []
let sum = 0
let s  = document.getElementById("sum-el")
let c  = document.getElementById("cards-el")
let isalive = false
let hasblackjack = false
let p = document.getElementById("player")
let ischips = true



//to start function
function entername(){
    fullname = prompt('Enter your name : ')
    chips = parseInt(prompt('Enter the no.of chips:'))
    p.textContent = fullname + ': $' + chips
  
   
}
function start() {
    isalive = true
    let card1 = random()
    let card2 = random()
    cards = [card1, card2]
    sum = card1 + card2
    
    if (chips > 0){
    rendergame()
    chips -=50
    }
    p.textContent = fullname + ': $' + chips
    

}

//to render the game
function rendergame(){
    s.textContent = 'Sum: '+sum
    c.textContent = 'Cards: '
    for(let i=0 ; i<cards.length ; i++)
    {
        c.textContent += cards[i] + ' '
    }

    if (sum < 21){
        message = 'Want to draw one more time?'
        isalive = true

    }
    else if (sum ===21){
        message = 'You have a Blackjack!'
        hasblackjack = true
        chips +=100
    }
    else {
        
        message = 'You are out of the game!'
        
        isalive = false
        if (chips === 0)
        {
            ischips = false
        }
    }
    msg.textContent = message
}

// for drawing the new card
function newcard(){
    if (isalive === true && hasblackjack ===false){
    let card3 = random()
    sum += card3
    cards.push(card3)
    rendergame()
    }
}


//for generating random card
function random(){
    let ran = Math.floor(Math.random()*12) +1
    if (ran ===1) 
    {
       return 11
    }
    else if (ran > 10)
    {
        return 10
    }
    else
    {
        return ran
    }
}