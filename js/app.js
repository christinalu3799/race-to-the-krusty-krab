// Assign patty wagons to variables
let pattyWagon1 = document.querySelector('.patty-wagon-1');
let pattyWagon2 = document.querySelector('.patty-wagon-2');

// Assign P1 and P2 roads to a variable 
let P1GameArea = document.querySelector('.road1');
let P2GameArea = document.querySelector('.road2');

// Create a player object to define the speed of the cars
let player = {speed:5};

// Create a keys object to keep track of the keys the players will use to move the cars
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

// This function allows the cars to move according to the keypress
// When the player holds the key, the car will continue to move
// Bound each patty wagon within the road area 
let road1 = P1GameArea.getBoundingClientRect();
let road2 = P2GameArea.getBoundingClientRect();
console.log(road1)
function playGame() {
      
    // This block will only execute when player.start === true 
    // Should be assigned to true as soon as the page loads
    if(player.start){

        // PLAYER 1 CONTROLS
        // Stop patty wagon at the top of the road
        // Need to adjust pixels to prevent patty wagon from getting cut off
        if(keys.w && player.y1 > (road1.top - road1.height + 250)) {
            player.y1 -= player.speed
        }
        if(keys.s && player.y1 < (road1.bottom - 75)) {
            player.y1 += player.speed
        }
        // x-position must be greater than 0 from the left
        if(keys.a && player.x1 > 0) {
            player.x1 -= player.speed
        }
        // Stay within the width of the road
        // Subtract 155px to prevent half of patty wagon from getting cut off
        if(keys.d && player.x1 < (road1.width - 155)) {
            player.x1 += player.speed
        }
    
        // PLAYER 2 CONTROLS
        if(keys.ArrowUp && player.y2 > (road2.top - road2.height + 250)) {
            player.y2 -= player.speed
        }
        if(keys.ArrowDown && player.y2 < (road2.bottom - 75)) {
            player.y2 += player.speed
        }
        if(keys.ArrowLeft && player.x2 > 0) {
            player.x2 -= player.speed
        }
        if(keys.ArrowRight && player.x2 < road2.width - 155) {
            player.x2 += player.speed
        }

        pattyWagon1.style.left = player.x1 + 'px';
        pattyWagon1.style.top = player.y1 + 'px';
        pattyWagon2.style.left = player.x2 + 'px';
        pattyWagon2.style.top = player.y2 + 'px';

        // Recursively calling the playGame function again to keep the cars moving
        window.requestAnimationFrame(playGame);
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

// This function loads as soon as the player gets onto the game page
function start() {
    window.requestAnimationFrame(playGame);
    player.start = true;

    // Generate the road lines 
    for(let x=0; x<8;x++) {
        // Creating the lines for the left and middle lanes
        let roadLine1Div = document.createElement('div');
        roadLine1Div.classList.add('line1');
        roadLine1Div.style.top = (x*110) + 'px';
        P1GameArea.appendChild(roadLine1Div);
        // Creating the lines for the middle and right lanes
    }
    player.x1 = pattyWagon1.offsetLeft;
    player.y1 = pattyWagon1.offsetTop;
    player.x2 = pattyWagon2.offsetLeft;
    player.y2 = pattyWagon2.offsetTop;
}