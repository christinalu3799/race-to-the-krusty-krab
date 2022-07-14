// Assign patty wagons to variables
let pattyWagon1 = document.querySelector('.patty-wagon-1');
let pattyWagon2 = document.querySelector('.patty-wagon-2');

// Create a player object to define the speed of the cars
let player = {speed:10};

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
function playGame() {
    console.log('inplay');
    
    // This block will only execute when player.start === true 
    // Should be assigned to true as soon as the page loads
    if(player.start){
        // PLAYER 1 CONTROLS
        if(keys.w) {
            player.y1 -= player.speed
        }
        if(keys.s) {
            player.y1 += player.speed
        }
        if(keys.a) {
            player.x1 -= player.speed
        }
        if(keys.d) {
            player.x1 += player.speed
        }
        // PLAYER 2 CONTROLS
        if(keys.ArrowUp) {
            player.y2 -= player.speed
        }
        if(keys.ArrowDown) {
            player.y2 += player.speed
        }
        if(keys.ArrowLeft) {
            player.x2 -= player.speed
        }
        if(keys.ArrowRight) {
            player.x2 += player.speed
        }

        pattyWagon1.style.left = player.x1 + 'px';
        pattyWagon1.style.top = player.y1 + 'px';
        pattyWagon2.style.left = player.x2 + 'px';
        pattyWagon2.style.top = player.y2 + 'px';

        // Calling the playGame function again to keep the cars moving
        window.requestAnimationFrame(playGame);
    }
}

// Functions to keep track of which keys are being pressed and which keys are not being pressed 
function pressOn(e) { 
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}
function pressOff(e) { 
    e.preventDefault();
    keys[e.key] = false;
    console.log(keys);
}

// This function loads as soon as the player gets onto the game page
function start() {
    player.start = true;
    window.requestAnimationFrame(playGame);
    player.x1 = pattyWagon1.offsetLeft;
    player.y1 = pattyWagon1.offsetTop;
    player.x2 = pattyWagon2.offsetLeft;
    player.y2 = pattyWagon2.offsetTop;
    console.log(player);
}