/* 
� APP: Fighting Game


Create an updateGame() function that will update the DOM with the state of the game �
========================================

- updateGame()

These are the 2 classes you must create and their methods �
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to �
========================================================
#1 ID � 'play' = Button to run simulation
#2 ID � 'result' = Div that holds the winner of the match
#3 ID � 'p1Name' = Div that holds player 1's Name
#4 ID � 'p2Name' = Div that holds player 2's Name
#5 ID � 'p1Health' = Div that holds player 1's health
#6 ID � 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
setTimeout(() => {
  console.clear()
  console.log('cleared console.')

}, 2000)


const playButton = document.getElementById('play')
const resultDiv = document.getElementById('result')
const p1Name = document.getElementById('p1Name')
const p2Name = document.getElementById('p2Name')
const p1HealthDiv = document.getElementById('p1Health')
const p2HealthDiv = document.getElementById('p2Health')

const p1attack = document.getElementById('p1attack')
const p1heal = document.getElementById('p1heal')
const p2attack = document.getElementById('p2attack')
const p2heal = document.getElementById('p2heal')
const victorySound = document.getElementById('victory')
// ** Check if either players health is  0 and if it is, then update isOver to true **

const updateGame = () => {

  if (!game.isOver) {
    p1HealthDiv.innerText = p1.health;
    p2HealthDiv.innerText = p2.health;
  } 

  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    game.declareWinner()
  }


  // Update the DOM with the names and the latest health of players

  // Condition IF either player health is <= 0 then set isOver to true and declareWinner

}

// ** Create the Player class which can create a player with all it's attributes and methods **
// qazi = new Player('Qazi', 100, 7)
// qazi.name � 'Qazi'
// qazi.health � 100
// qazi.attackDmg � 7
class Player {
  constructor(name, health, attackDamage, maxHealth) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
    this.maxHealth = maxHealth;
  }

  // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
  strike (player, enemy, attackDmg) {
    if (player.health <= 0 || enemy.health <= 0) {

    }
    else {
      const damageAmount = Math.floor(Math.random() * attackDmg)
      enemy.health -= damageAmount;
      updateGame(player, enemy)
      p1attack.currentTime = 0;
      p1attack.play()
      console.log(`${player.name} had attack ${enemy.name} with ${damageAmount}`)
    }

    // Get random number between 1 - 10 and that is damageAmount
    // Subtract the enemy health with the damageAmount
    //  Update the game and DOM with updateGame()
    //  Return a message of 'player name attacks enemy name for damageAmount'
  }

  // ** Heal the player for random number from  1 to 5 **
  heal (player) {
    
    if (player.health >= player.maxHealth){
      player.health = player.maxHealth;
    }
    else {
      const healAmount = Math.floor(Math.random() * 6)
      player.health += healAmount
    }

    p1heal.currentTime = 0;
    p1heal.play()
    updateGame()

    // Get random number between 1 - 5 and store that in hpAmount
    // Add hpAmount to players health
    //  Update the game and DOM with updateGame()
    //  Return a message of 'player name heals for hpAmount HP'
  }
}

// ** Create the Game class with all it's attributes and methods to run a match **
// game.isOver � false
class Game {
  constructor() {
    this.isOver = false;
  }

  // ** If the game is over and a player has 0 health declare the winner! **
  declareWinner() {
    let winner;
    if (this.isOver) {
      
      winner = p1.health > p2.health ? `Winner: ${p1.name}` : `Winner: ${p2.name}`

      resultDiv.innerText = winner;
      victorySound.currentTime = 0
      victorySound.play();
    }

    // Create a message variable that will hold a message based on the condition
    // If isOver is true AND p1 health is <= 0 then update message variable  to 'p1 WINS!'
    // Else if isOver is true AND p2 health is <= 0 then update message variable  to 'p2 WINS!'
    // Play victory sound
    // Return message variable 

  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1, p2) {
    p1.health = p1.maxHealth;
    p2.health = p2.maxHealth;
    this.isOver = false
    resultDiv.innerText = ''
    updateGame()
    // set p1 health and p2 health back to 100 and isOver back to false and clear resultDiv.innerText and don't forget to updateGame()

  }
  
  // ** Simulates the whole match untill one player runs out of health **
  play(p1, p2) {
    this.reset(p1, p2)
    // Reset to make sure player health is back to full before starting

    // Make sure the players take turns untill isOver is TRUE
    while (!this.isOver) {
      p1.strike(p1, p2, p1.attackDmg)
      p1.heal(p1)

      p2.strike(p2, p1, p2.attackDmg)
      p2.heal(p2)
      //Make sure both players get strike() and heal() once each loop
    }

    game.declareWinner();
    // Once isOver is TRUE run the declareWinner() method 
    
  }

}

// ** Create 2 players using the player class **
let game = new Game()
const p1 = new Player('Snow Man', 100, 12, 130)
const p2 = new Player('Ice Man', 120, 11, 135)
p1Name.innerText = p1.name;
p2Name.innerText = p2.name;
game.reset(p1, p2);

// ** Save original Player Data into a variable in order to reset **

// ** Create the game object from the Game class **

// ** Intialize the game by calling updateGame() **


// ** Save intial isOver from the game object inside this variable **
let gameState;


// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **


// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {
  if (e.key == 'q') {
    p1.strike(p1, p2, p1.attackDmg)
  }
  // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()

    // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
  if (e.key == 'a') {
    p1.heal(p1)
  }
  // if you press a AND the player health is greater than 0 AND isOver is still false then strike()

    // After healing then play heal sound

});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {

  if (e.key == 'p') {
    p2.strike(p2, p1, p2.attackDmg)
  }
  // if you press p AND enemy health is greater than 0 AND isOver is still false then stike()

    // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
  if (e.key == 'l') {
    p2.heal(p2)
  }
  // if you press l AND the player health is greater than 0 AND isOver is still false then heal()

    // After healing then play heal sound

});
