let pattyWagon = document.querySelector('.patty-wagon');
let moveBy = 10;

window.addEventListener('load', () => {
    pattyWagon.style.position = 'absolute';
    pattyWagon.style.left = 0;
    pattyWagon.style.bottom = 0;
});

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    switch (e.key) {
        case 'ArrowLeft':
            pattyWagon.style.left = parseInt(pattyWagon.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            pattyWagon.style.left = parseInt(pattyWagon.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            pattyWagon.style.bottom = parseInt(pattyWagon.style.bottom) + moveBy + 'px';
            break;
        case 'ArrowDown':
            pattyWagon.style.bottom = parseInt(pattyWagon.style.bottom) - moveBy + 'px';
            break;
    }
});