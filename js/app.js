// Assign P1 and P2 roads to a variable 
let P1GameArea = document.querySelector('.road1');
let P2GameArea = document.querySelector('.road2');

// ====================================================================================
// Select Difficulty Function
// ====================================================================================
// Create a player object to define the speed of the cars
// This is my "game" object as specified in the project requirements
let player = {};
function selectDifficulty() {
    let levels = document.querySelectorAll('.lev');
    let easy  = document.querySelector('.easy');
    let med  = document.querySelector('.med');
    let hard  = document.querySelector('.hard');
    let start = document.querySelector('.start');
    let difficulty = document.querySelector('.difficulty');
    easy.addEventListener('click', function() {
        player.speed = 2;
        start.style.visibility = 'visible';
    });
    med.addEventListener('click', function() {
        player.speed = 4;
        start.style.visibility = 'visible';
    });
    hard.addEventListener('click', function() {
        player.speed = 6;
        start.style.visibility = 'visible';
    });
    // Call countdown function once player has selected level of difficulty 
        start.addEventListener('click', countdown);
        start.addEventListener('click', function() {
            difficulty.style.visibility = 'hidden';
            start.remove();
        });
       
}
// ====================================================================================
// Create a keys object to keep track of the keys the players will use to move the cars
// ====================================================================================
let keys = {
    // PLAYER 1 CONTROLS
    w: false, 
    s: false, 
    d: false, 
    a: false,
    // PLAYER 2 CONTROLS
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false, 
    ArrowLeft: false,
};

// Event listeners used to track when keys are pressed
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

// Move road lines function 
function animateRoadLines() { 
    let lines1 = document.querySelectorAll('.line1');
    let lines2 = document.querySelectorAll('.line2');
    lines1.forEach(function(line) {
        if(line.y > road1.height) {
            line.y -= road1.height;
        }
        line.y += player.speed;
        line.style.top = line.y + 'px';
    })
    lines2.forEach(function(line) { 
        if(line.y > road1.height) {
            line.y -= road1.height;
        }
        line.y += player.speed;
        line.style.top = line.y + 'px';
    })
}
// ====================================================================================
// Function to detect if player has collided with other boat mobiles 
// ====================================================================================
function crash(pattywagon, boatmobile) {   
let pattywagonRect = pattywagon.getBoundingClientRect();
let boatmobileRect = boatmobile.getBoundingClientRect();
    return !(
        // Check top and bottom
        (pattywagonRect.bottom < boatmobileRect.top) || 
        (pattywagonRect.top > boatmobileRect.bottom) ||
        // Check left and right
        (pattywagonRect.right < boatmobileRect.left) ||
        (pattywagonRect.left > boatmobileRect.right)
    )
}
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');

// Bound each patty wagon within the road area 
let road1 = P1GameArea.getBoundingClientRect();
let road2 = P2GameArea.getBoundingClientRect();
// ====================================================================================
// Make tracker to keep track of who is still in the game
// ====================================================================================
let stillInGame = { 
    P1: true,
    P2: true
};
// ====================================================================================
// Function to display 'GAME OVER' message if BOTH players lose
// ====================================================================================
function lost() {  
    if(!stillInGame.P1) { 
        let lost1 = document.createElement('div');
        lost1.setAttribute('class', 'lost-msg');
        player1.appendChild(lost1); 
        console.log(stillInGame);
    } 
    if(!stillInGame.P2) {
        let lost2 = document.createElement('div');
        lost2.setAttribute('class', 'lost-msg');
        player2.appendChild(lost2); 
        console.log(stillInGame);
    }  
}
// Generate and move boatmobiles 
function moveBoatMobiles(pattyWagon1, pattyWagon2) {
    let boat = document.querySelectorAll('.boat-mobile');
    boat.forEach(function (b) {
        if(crash(pattyWagon1, b) && stillInGame.P1 === true && timerGoing === true) {
            stillInGame.P1 = false;
            lost();
        };
        if(crash(pattyWagon2, b) && stillInGame.P2 === true && timerGoing === true) {
            stillInGame.P2 = false;
            lost();
        };
        // If both players lose, change to Game Over page
        if(stillInGame.P1 === false && stillInGame.P2 === false && timerGoing === true) {
            // Stop animation frame 
            cancelAnimationFrame(myReq);
            window.location.href = './game-over.html';
        }
        if(b.y > road1.height + b.height) {
            b.y -= road1.height;
            // b.style.left = Math.floor(Math.random()*road1.width) +'px';
        };
        b.y += player.speed; 
        b.style.top = b.y + 'px';
    })
}
let myReq;
// ====================================================================================
// This function allows the cars to move according to the keypress
// ====================================================================================
function playGame() {

    let pattyWagon1 = document.querySelector('.pattyWagon1');
    let pattyWagon2 = document.querySelector('.pattyWagon2');

    animateRoadLines();
    moveBoatMobiles(pattyWagon1, pattyWagon2);

    // This block will only execute when player.start === true 
    // Should be assigned to true as soon as the page loads
    if(player.start){

        // PLAYER 1 CONTROLS ----------------------------------------------------------
        // Stop patty wagon at the top of the road
        // Need to adjust pixels to prevent patty wagon from getting cut off
        if(keys.w && player.y1 > (road1.top)) {
            player.y1 -= player.speed
        }
        if(keys.s && player.y1 < (road1.bottom - 100)) {
            player.y1 += player.speed
        }
        // x-position must be greater than 0px from the left side of road
        if(keys.a && player.x1 > 15) {
            player.x1 -= player.speed
        }
        // Stay within the width of the road
        // Subtract 155px to prevent half of patty wagon from getting cut off
        if(keys.d && player.x1 < (road1.width - 130)) {
            player.x1 += player.speed
        }
    
        // PLAYER 2 CONTROLS ----------------------------------------------------------
        if(keys.ArrowUp && player.y2 > (road2.top)) {
            player.y2 -= player.speed
        }
        if(keys.ArrowDown && player.y2 < (road2.bottom - 100)) {
            player.y2 += player.speed
        }
        if(keys.ArrowLeft && player.x2 > 15) {
            player.x2 -= player.speed
        }
        if(keys.ArrowRight && player.x2 < road2.width - 130) {
            player.x2 += player.speed
        }

        pattyWagon1.style.left = player.x1 + 'px';
        pattyWagon1.style.top = player.y1 + 'px';
        pattyWagon2.style.left = player.x2 + 'px';
        pattyWagon2.style.top = player.y2 + 'px';

        // Recursively calling the playGame function again to keep the cars moving
        myReq = window.requestAnimationFrame(playGame);
    }
}

// Functions to keep track of which keys are being pressed and which keys are not being pressed 
function pressOn(e) { 
    e.preventDefault();
    keys[e.key] = true;
}
function pressOff(e) { 
    e.preventDefault();
    keys[e.key] = false;
}  
// ====================================================================================
// Timer function that counts down when race has begun
// ====================================================================================
let timerGoing = true;
function raceTimer() {
    // Length of game in seconds
    let time = 30;
    let timerElement = document.createElement('h1');
    let timerBox = document.querySelector('.timerBox');
    let timer = setInterval(function () {
        if(time >= 0) {
            // Continue timer as long as one player is still in the game
            if(stillInGame.P1 === true || stillInGame.P2 === true) {
                timerElement.innerHTML = `${time}s`;
                timerBox.appendChild(timerElement);
                time--;
            }
        } 
        if(time === 0 ) {
            // Check if both players are still in the game
            if(stillInGame.P1 === true && stillInGame.P2 === true) {
                timerBox.appendChild(timerElement);
                timerElement.innerHTML = "It's a tie!";
                timerGoing = false;
                // Make restart button
                let restartbtn = document.createElement('button');
                restartbtn.innerHTML = 'Play Again';
                let a = document.createElement('a');
                a.setAttribute('href','./race.html');
                a.appendChild(restartbtn);
                timerBox.appendChild(a);
            } else {
                // If only 1 player is still in the game
                timerElement.innerHTML = stillInGame.P1 === true ? 'Player 1 Wins!' : 'Player 2 Wins!';

                timerBox.appendChild(timerElement);
                timerGoing = false;
                
                // Make restart button
                let restartbtn = document.createElement('button');
                restartbtn.innerHTML = 'Play Again';
                let a = document.createElement('a');
                a.setAttribute('href','./race.html');
                a.appendChild(restartbtn);
                timerBox.appendChild(a);
            }
            clearInterval(timer);
        }
    }, 1000);
}

// ====================================================================================
// Countdown Function
// ====================================================================================
function countdown() {
    // Count down from 3 before the game starts
    let num = 3;
    let counter = document.createElement('h1');
    let countdownBox = document.querySelector('.countdown-box');
    let gameCountdown = setInterval(function() {
        // Create new h1 element for the countdown #s
        counter.innerHTML = `${num}`;
        countdownBox.appendChild(counter);
        if(num === 0) {
            counter.innerHTML = `GO!`;
            countdownBox.appendChild(counter);
            clearInterval(gameCountdown);
            // Hide countdown numbers after get to zero
            setTimeout(function() {
                countdownBox.style.display = 'none';
            }, 1500);
        }
        num--;   
    },1000);

    // Start game after 5 seconds - lines up with end of countdown
    setTimeout(function() {
        window.requestAnimationFrame(playGame);
        player.start = true;
        raceTimer();
    },5500);
    
}
// ====================================================================================
// This function loads as soon as the player gets onto the game page
// the start() function calls the playGame function
// ====================================================================================
function start() {
    // Generate the road lines. Iterating 8 times for 8 lines
    let numLines = 8;
    for(let x=0; x < numLines;x++) {

        // Creating the lines for the left and middle lanes
        // PLAYER 1 ----------------------------------------------
        let road1Line1Div = document.createElement('div');
        road1Line1Div.classList.add('line1');
        // Set y-pos of lines to use in animateRoadLines function
        road1Line1Div.y = x * (road1.height/numLines);
        road1Line1Div.style.top = (x*(road1.height/numLines)) + 'px';
        P1GameArea.appendChild(road1Line1Div);

        // PLAYER 2 ----------------------------------------------
        let road2Line1Div = document.createElement('div');
        road2Line1Div.classList.add('line1');
        road2Line1Div.y = x * (road1.height/numLines);
        road2Line1Div.style.top = (x*(road1.height/numLines)) + 'px';
        P2GameArea.appendChild(road2Line1Div);

        // Creating the lines for the middle and right lanes
        // PLAYER 1 ----------------------------------------------
        let road1Line2Div = document.createElement('div');
        road1Line2Div.classList.add('line2');
        road1Line2Div.y = x * (road2.height/numLines);
        road1Line2Div.style.top = (x*(road2.height/numLines)) + 'px';
        P1GameArea.appendChild(road1Line2Div);

        // PLAYER 2 ----------------------------------------------
        let road2Line2Div = document.createElement('div');
        road2Line2Div.classList.add('line2');
        road2Line2Div.y = x * (road2.height/numLines);
        road2Line2Div.style.top = (x*(road2.height/numLines)) + 'px';
        P2GameArea.appendChild(road2Line2Div);
    }

    // Create players' cars (patty wagons)
    let pattyWagon1 = document.createElement('div');
    pattyWagon1.setAttribute('class','pattyWagon1');
    let pattyWagon2 = document.createElement('div');
    pattyWagon2.setAttribute('class','pattyWagon2');
    P1GameArea.appendChild(pattyWagon1);
    P2GameArea.appendChild(pattyWagon2);

    player.x1 = pattyWagon1.offsetLeft;
    player.y1 = pattyWagon1.offsetTop;
    player.x2 = pattyWagon2.offsetLeft;
    player.y2 = pattyWagon2.offsetTop;

    // Generate random boat-mobiles 
    let lanePositions = [55, 195, 350];
    let numBoatMobiles = 20;

    for(let x = 0; x < numBoatMobiles; x++) {
        console.log(x)
        // Creating Boatmobiles for Player 1
        // Creating new element for boat mobiles
        let boatMobile1 = document.createElement('div');
        boatMobile1.classList.add('boat-mobile');

        // Assigning y-position to boat mobile to span the entire height of the road
        boatMobile1.y = ((x+1)*road1.height*(-1));
        boatMobile1.style.top = boatMobile1.y + 'px';
        boatMobile1.style.left =lanePositions[Math.floor(Math.random()*3)] +'px';
        P1GameArea.appendChild(boatMobile1);

        // Creating Boatmobiles for Player 2
        let boatMobile2 = document.createElement('div');
        boatMobile2.classList.add('boat-mobile');
        boatMobile2.y = ((x+1)*road2.height*(-1));
        boatMobile2.style.top = boatMobile2.y + 'px';
        boatMobile2.style.left =lanePositions[Math.floor(Math.random()*3)] +'px';
        P2GameArea.appendChild(boatMobile2);
    }
    selectDifficulty();
}