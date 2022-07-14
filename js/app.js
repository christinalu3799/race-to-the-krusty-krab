let pattyWagon1 = document.querySelector('.patty-wagon-1');
let pattyWagon2 = document.querySelector('.patty-wagon-2');
let moveBy = 60;

window.addEventListener('load', () => {
    pattyWagon1.style.position = 'absolute';
    pattyWagon1.style.left = 0;
    pattyWagon1.style.bottom = 0;
    pattyWagon2.style.position = 'absolute';
    pattyWagon2.style.left = 0;
    pattyWagon2.style.bottom = 0;
});

document.addEventListener('keydown', (e) => {

    console.log(e);
    switch (e.key) {
        case 'a':
            pattyWagon1.style.left = parseInt(pattyWagon1.style.left) - moveBy + 'px';
            break;
        case 'd':
            pattyWagon1.style.left = parseInt(pattyWagon1.style.left) + moveBy + 'px';
            break;
        case 'w':
            pattyWagon1.style.bottom = parseInt(pattyWagon1.style.bottom) + moveBy + 'px';
            break;
        case 's':
            pattyWagon1.style.bottom = parseInt(pattyWagon1.style.bottom) - moveBy + 'px';
            break;
        case 'ArrowLeft':
            pattyWagon2.style.left = parseInt(pattyWagon2.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            pattyWagon2.style.left = parseInt(pattyWagon2.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            pattyWagon2.style.bottom = parseInt(pattyWagon2.style.bottom) + moveBy + 'px';
            break;
        case 'ArrowDown':
            pattyWagon2.style.bottom = parseInt(pattyWagon2.style.bottom) - moveBy + 'px';
            break;
    }
});