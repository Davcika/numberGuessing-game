let prompt = require('prompt-sync')()


function startGame(difficulty){
    let number = Math.floor(Math.random() * 100) 
    switch(Number(difficulty)){
        case 1:
            difficulty = 10
            break;
        case 2: 
            difficulty = 5
            break;
        case 3:
            difficulty = 2
            break;
        default:
            return 100;
    }
    let guess;
    while(difficulty){
        guess = prompt("Enter your guess: ")
        if(number < guess){
            console.log("number too big")
        }else if(number > guess){
            console.log("number too small")
        }else{
            return true
        }
        difficulty--
    }
    return false
}

console.log("Welcome to number guessing game")
console.log("Enter your difficulty")
console.log("1. Easy (10 chances)\n2. Normal (5 chances)\n3. Hard (2 chances)")


let difficulty = prompt("Enter your difficulty: ")
result = startGame(difficulty)
if(result == 100){
    console.log("incorrect difficulty")
}else if(!result){
    console.log("you didn't guess the number")
}else{
    console.log("you won!")
}