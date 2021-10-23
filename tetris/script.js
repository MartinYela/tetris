function drowBoard(container_class, height, width){  
    let amount = height*width;
    for (let i=1;i<=amount;i++){
        let block = generateBoardBlock();
        document.querySelector(container_class).appendChild(block);
    }
}
function generateBoardBlock(){
        let block = document.createElement('div');
        block.classList.add(`block`);
        let smallBlock = document.createElement('div');
        smallBlock.classList.add(`smallBlock`);
        block.appendChild(smallBlock);
        return block;
}

const BOARD_WIDTH = 10;

drowBoard('.boards__container--big', 20, BOARD_WIDTH);
drowBoard('.boards__container--small', 4, 4);

//crear palito
const I = [ [0, 1, 2, 3] , [ 0, 0+BOARD_WIDTH, 0+ 2*BOARD_WIDTH, 0+ 3*BOARD_WIDTH] ];

// crear L
const L = [ [0, 1, 2, 0+BOARD_WIDTH], [1, 2, 2+BOARD_WIDTH, 2+2*BOARD_WIDTH], [0 + BOARD_WIDTH, 1+BOARD_WIDTH, 2+BOARD_WIDTH, 2], [1, 1+BOARD_WIDTH, 1+2*BOARD_WIDTH, 2+2*BOARD_WIDTH] ];

// crear S
const S = [ [0+BOARD_WIDTH, 1+BOARD_WIDTH, 1, 2], [0, 0+BOARD_WIDTH, 1+BOARD_WIDTH, 1+2*BOARD_WIDTH]];

// crear T
const T = [ [0, 1 , 2, 1+BOARD_WIDTH], [1, 0+BOARD_WIDTH, 1+BOARD_WIDTH, 1+2*BOARD_WIDTH], [1, 0+BOARD_WIDTH, 1+BOARD_WIDTH, 2+BOARD_WIDTH], [0, 0+BOARD_WIDTH, 1+BOARD_WIDTH, 0+2*BOARD_WIDTH], ];

// crear J 
const J = [ [0, 1, 2, 2+BOARD_WIDTH] , [ 1, 1+BOARD_WIDTH, 1+2*BOARD_WIDTH, 2*BOARD_WIDTH], [0, BOARD_WIDTH, 1+BOARD_WIDTH, 2+BOARD_WIDTH], [0, 1, BOARD_WIDTH, 2*BOARD_WIDTH]];

// crear Z
const Z = [ [0, 1, 1+BOARD_WIDTH, 2+BOARD_WIDTH] , [ 1, 1+BOARD_WIDTH, 0+ BOARD_WIDTH, 0+ 2*BOARD_WIDTH]];










































//Prueba de funcionamiento fichas


// document.querySelectorAll('.block')[J[0][0]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[0][1]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[0][2]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[0][3]].setAttribute('style', 'opacity:1;');

// setTimeout(() => {
//     document.querySelectorAll('.block')[J[0][0]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[0][1]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[0][2]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[0][3]].setAttribute('style', 'opacity:0.2;');
// },500);


// setTimeout(() => {
// document.querySelectorAll('.block')[J[1][0]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[1][1]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[1][2]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[1][3]].setAttribute('style', 'opacity:1;');
// },1000);
// setTimeout(() => {
//     document.querySelectorAll('.block')[J[1][0]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[1][1]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[1][2]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[1][3]].setAttribute('style', 'opacity:0.2;');
// },1500);

// setTimeout(() => {
// document.querySelectorAll('.block')[J[2][0]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[2][1]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[2][2]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[2][3]].setAttribute('style', 'opacity:1;');
// },2000);
// setTimeout(() => {
// document.querySelectorAll('.block')[J[2][0]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[2][1]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[2][2]].setAttribute('style', 'opacity:0.2;');
// document.querySelectorAll('.block')[J[2][3]].setAttribute('style', 'opacity:0.2;');
// },2500);
// setTimeout(() => {
// document.querySelectorAll('.block')[J[3][0]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[3][1]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[3][2]].setAttribute('style', 'opacity:1;');
// document.querySelectorAll('.block')[J[3][3]].setAttribute('style', 'opacity:1;');
// },3000);
