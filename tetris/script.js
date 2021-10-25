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
const BOARD_WIDTH__mini = 4;

drowBoard('.boards__container--big', 20, BOARD_WIDTH);
drowBoard('.boards__container--small', 4, BOARD_WIDTH__mini);

let currentPosition = 3;

function createArrTetrominoe(width) {
    //crear palito  0
const I = [ [0, 1, 2, 3] , [ 0, 0+width, 0+ 2*width, 0+ 3*width] ];
// crear L  1
const L = [ [0, 1, 2, 0+width], [1, 2, 2+width, 2+2*width], [0 + width, 1+width, 2+width, 2], [1, 1+width, 1+2*width, 2+2*width] ];
// crear S  2
const S = [ [0+width, 1+width, 1, 2], [0, 0+width, 1+width, 1+2*width]];
// crear Z  3
const Z = [ [0, 1, 1+width, 2+width] , [ 1, 1+width, 0+ width, 0+ 2*width]];
// crear J 4
const J = [ [0, 1, 2, 2+width] , [ 1, 1+width, 1+2*width, 2*width], [0, width, 1+width, 2+width], [0, 1, width, 2*width]];
// crear Q  5
const Q = [[0, 1, 0+width, 1+width]];
// const Q = [[0, 1, 0+BOARD_WIDTH, 1+BOARD_WIDTH], [0, 1, 0+BOARD_WIDTH, 1+BOARD_WIDTH]]; para pruebas por el índice
// crear T  6
const T = [ [0, 1 , 2, 1+width], [1, 0+width, 1+width, 1+2*width], [1, 0+width, 1+width, 2+width], [0, 0+width, 1+width, 0+2*width], ];
const tetrominos = [I, L, S, Z, J, Q, T];
return tetrominos;
}

const tetrominos = createArrTetrominoe(BOARD_WIDTH);
const tetrominos__small = createArrTetrominoe(BOARD_WIDTH__mini);

function generateRandomTetrominoe(tetrominoe_arr) {     //le paso un array de tetrominoe
    const position = Math.floor((Math.random() * (7 - 0) + 0));
    const aleat = tetrominoe_arr[position];
    const obj = {
        positionAtTetrominoeList: position,     // la posición que ocupa en la lista original de tetrominos
        piece: aleat[0],    // La lista de posiciones de la rotación actual (en este caso la inicial)
        position: aleat[0][0], // La posición actual de la pieza en el tablero (al inicio estaráen la fila 0, columna mitad del tablero)
        rotation: 0, //el índice de la rotación actual de la pieza
    };
    return obj;
}

function drawTetrominoeInMainBoard(tetrominoeObj) {
    for (let i=0; i<4;i++){
        document.querySelectorAll('.block')[tetrominoeObj.piece[i]+currentPosition].classList.add('printBlock');
    }
}

function undrawTetrominoeInMainBoard(tetrominoeObj) {
    for (let i=0; i<4;i++){
        document.querySelectorAll('.block')[tetrominoeObj.piece[i]+currentPosition].classList.remove('printBlock');
    }
}


let aleatTetrominoe = generateRandomTetrominoe(tetrominos);
drawTetrominoeInMainBoard(aleatTetrominoe);





































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
