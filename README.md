# Race to the Krusty Krab 

## What is it? 

This is a simple 2-player racing game made with HTML, CSS, and vanilla JavaScript. 

## How do you play? 

[Click here to be directed to the game!](https://christinalu.me/race-to-the-krusty-krab/)

Alternatively, you can clone this repo onto your local machine and play the game through your live server. 

## Approach 

In this project, I used simple vanilla javascript to interact with the elements in the game. A main function called `start()` is invoked once the game page loads. This function sets up the road, road lines, patty wagons, and boat mobiles. Then, the `selectDifficulty()` function is called to allow users to choose a level. After the user hits the "Start" button, the game will begin with a countdown via the `countdown()` function which then calls the `playGame()` function that bounds the patty wagons within the road. 

During the game, I used event listeners to move the patty wagon whenever users press the corresponding keys on their side of the keyboard. The boat mobiles are randomly generated as soon as the `start()` function is called. In using the `.getBoundingClientRect()` method, I was able to set up conditions to detect when the users' patty wagon collided with the randomly generated boat mobiles. If any of these conditions were met, then the game would end for that corresponding player. The `window.RequestAnimationFrame()` method recursively calls the `playGame` to create the on screen animations of the road lines and moving cars. This is the key method that drives the entire game and creates the effects between the players' patty wagons, boat mobiles, and road lines.

## Wire Frames

Check out the wire frames I created using Figma [here](https://www.figma.com/file/FsIXgoUFhoVhLoGmzGOf0P/PROJECT-1---RACE-TO-THE-KRUSTY-KRAB?node-id=0%3A1).

## User Stories

* The user has the option to click the "Start" button or the "How to Play" button on the homepage.
* The "How to Play" button will take users to an instructions page. From there, the user has the option to return to the home page or start the game. 
* When the user hits "Start," the page will be redirected to the game page 
* When on the game page, the user has the option to choose the level of difficulty for the race.
* After hitting start, the game will begin and the users will use the keyboard keys to move their vehicles around the other cars. 
* When the game starts, a 30 second timer will start. The goal is to make it past the 30 seconds of the game without hitting another car.
* When the user hits another car, it will be game over.
* When the timer ends and both users are still in the game, then the game will announce that it's a tie. Users will have the option to play again. 
* If both players result in a game over before the timer ends, the game will be directed to a game over page where users can either play again or go back to the home page. 

## Forthcoming Features 

I hope to add sound effects to indicate when the player has hit another car. I also want to add more visual elements along the sides of the road to create a more realistic feel of a player driving up a road. 


