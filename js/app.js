let pattyWagon1 = document.querySelector('.patty-wagon-1');
let pattyWagon2 = document.querySelector('.patty-wagon-2');

let player = {speed:10};
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

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function playGame() {
    console.log('inplay');
    
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

        window.requestAnimationFrame(playGame);
    }
}
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
function start() {
    player.start = true;
    window.requestAnimationFrame(playGame);
    player.x1 = pattyWagon1.offsetLeft;
    player.y1 = pattyWagon1.offsetTop;
    player.x2 = pattyWagon2.offsetLeft;
    player.y2 = pattyWagon2.offsetTop;
    console.log(player);
}

// window.addEventListener('load', () => {
//     pattyWagon1.style.position = 'absolute';
//     pattyWagon1.style.left = 0;
//     pattyWagon1.style.bottom = 0;
//     pattyWagon2.style.position = 'absolute';
//     pattyWagon2.style.left = 0;
//     pattyWagon2.style.bottom = 0;
// });

// document.addEventListener('keydown', (e) => {

//     console.log(e);
//     switch (e.key) {
//         case 'a':
//             pattyWagon1.style.left = parseInt(pattyWagon1.style.left) - moveBy + 'px';
//             break;
//         case 'd':
//             pattyWagon1.style.left = parseInt(pattyWagon1.style.left) + moveBy + 'px';
//             break;
//         case 'w':
//             pattyWagon1.style.bottom = parseInt(pattyWagon1.style.bottom) + moveBy + 'px';
//             break;
//         case 's':
//             pattyWagon1.style.bottom = parseInt(pattyWagon1.style.bottom) - moveBy + 'px';
//             break;
//         case 'ArrowLeft':
//             pattyWagon2.style.left = parseInt(pattyWagon2.style.left) - moveBy + 'px';
//             break;
//         case 'ArrowRight':
//             pattyWagon2.style.left = parseInt(pattyWagon2.style.left) + moveBy + 'px';
//             break;
//         case 'ArrowUp':
//             pattyWagon2.style.bottom = parseInt(pattyWagon2.style.bottom) + moveBy + 'px';
//             break;
//         case 'ArrowDown':
//             pattyWagon2.style.bottom = parseInt(pattyWagon2.style.bottom) - moveBy + 'px';
//             break;
//     }
// });