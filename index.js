const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let buttonOne = document.getElementById("button-one")
let buttonTwo = document.getElementById("button-two")

let generatorEl = document.getElementById("generator")
let passwordLength = 15


function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    buttonOne.textContent = ""   //because we want the buttons to host the resulting passwords
    buttonTwo.textContent = ""
    for (let i = 0; i < passwordLength; i++) {
        buttonOne.textContent += getRandomCharacter()    
        buttonTwo.textContent += getRandomCharacter()       
    }

}

