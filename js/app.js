let pattyWagon1 = document.querySelector('.patty-wagon-1');
let pattyWagon2 = document.querySelector('.patty-wagon-2');

let player = {speed:10};
let keys = {
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
        if(keys.ArrowUp) {
            player.y -= player.speed
        }
        if(keys.ArrowDown) {
            player.y += player.speed
        }
        if(keys.ArrowLeft) {
            player.x -= player.speed
        }
        if(keys.ArrowRight) {
            player.x += player.speed
        }
        pattyWagon2.style.left = player.x + 'px';
        pattyWagon2.style.top = player.y + 'px';

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
    player.x = pattyWagon2.offsetLeft;
    player.y = pattyWagon2.offsetTop;
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