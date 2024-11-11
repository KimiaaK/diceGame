
/* for image 1 */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; 
var leftDiceImage = document.querySelectorAll("img")[0];
leftDiceImage.setAttribute('src', randomDiceImage1);


/* for image 2 */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; 
var rightDiceImage = document.querySelectorAll("img")[1];
rightDiceImage.setAttribute('src', randomDiceImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Won!! 🏁";
}else if(randomNumber2> randomNumber1){
    document.querySelector('h1').innerHTML = "Player 2 Won!! 🏁"

}else{
    document.querySelector('h1').innerHTML = "Nobody Won! 🙁"
}