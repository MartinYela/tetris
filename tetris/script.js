function drowBoard(container_class, height, width){  
    let amount = height*width;
    for (let i=1;i<=amount;i++){
        let block = generateBoardBlock();
        if (container_class === '.boards__container--small'){
            block.classList.add('miniBlock');
        }
        
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

const tetrominos = createArrTetrominoe(BOARD_WIDTH);        //array de tetrominos para board-big
const tetrominos__small = createArrTetrominoe(BOARD_WIDTH__mini); //array de tetrominos para board-mini

let aleatTetrominoe = generateRandomTetrominoe(tetrominos); // genero el objeto tetromino
let currentRotation = 0;  //rotacion actual del tetromino

let currentTetromino = tetrominos[aleatTetrominoe.positionAtTetrominoeList][currentRotation]; //tetromino en la posicion actual
drawTetrominoeInMainBoard(currentTetromino);

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

// function drawTetrominoeInMainBoard(tetrominoeObj) {
//     for (let i=0; i<4;i++){
//         document.querySelectorAll('.block')[tetrominoeObj.piece[i]+currentPosition].classList.add('printBlock');
//     }
// }
// function undrawTetrominoeInMainBoard(tetrominoeObj) {
//     for (let i=0; i<4;i++){
//         document.querySelectorAll('.block')[tetrominoeObj.piece[i]+currentPosition].classList.remove('printBlock');
//     }
// }
const array = document.querySelectorAll('block');       //los 200 bloques

function drawTetrominoeInMainBoard(tetrominoe) {
    for (let i=0; i<4;i++){
        document.querySelectorAll('.block')[tetrominoe[i]+currentPosition].classList.add('printBlock');
    }
}

function undrawTetrominoeInMainBoard(tetrominoe) {
    for (let i=0; i<4;i++){
        document.querySelectorAll('.block')[tetrominoe[i]+currentPosition].classList.remove('printBlock');
    }
}


function drawTetrominoeInMiniBoard(tetrominoeObj) {
    for (let i=0; i<4;i++){
        document.querySelectorAll('.miniBlock')[tetrominoeObj.piece[i]].classList.add('printBlock');
    }
}

function undrawTetrominoeInMiniBoard(tetrominoeObj) {
    for (let i=0; i<4;i++){
        document.querySelectorAll('.miniBlock')[tetrominoeObj.piece[i]].classList.remove('printBlock');
    }
}

let aleatTetrominoeMini = generateRandomTetrominoe(tetrominos__small); //se crea el tetromino aleatorio para el mini board
drawTetrominoeInMiniBoard(aleatTetrominoeMini);


function moveRigth(){
    if (currentTetromino.some((block) => (block+1+currentPosition)%10 === 0)){
        // Poner sonido de que no se puede mover
    } else {
        undrawTetrominoeInMainBoard(currentTetromino);
        currentPosition ++;
        drawTetrominoeInMainBoard(currentTetromino);
    }    
}
function moveLeft(){
    if (currentTetromino.some((block) => (block+currentPosition)%10 === 0)){
        // Poner sonido de que no se puede mover
    } else {
        undrawTetrominoeInMainBoard(currentTetromino);
        currentPosition --;
        drawTetrominoeInMainBoard(currentTetromino);
    }
}
function moveDown(){
    if (currentTetromino.some((block) => (block+currentPosition+BOARD_WIDTH)>200)){
        // Poner sonido de que no se puede mover
    } else {
        undrawTetrominoeInMainBoard(currentTetromino);
        currentPosition += BOARD_WIDTH;
        drawTetrominoeInMainBoard(currentTetromino);
    }
}

function rotate() {
    undrawTetrominoeInMainBoard(currentTetromino);
    if (currentRotation < tetrominos[aleatTetrominoe.positionAtTetrominoeList].length-1) {//si hay + posiciones para rotar
        currentRotation ++;
    } else {
        currentRotation = 0;
    }

    currentTetromino= tetrominos[aleatTetrominoe.positionAtTetrominoeList][currentRotation];
    drawTetrominoeInMainBoard(currentTetromino);
}


//TODO LO DE ABAJO DE MOMENTO ES PARA PRUEBAS

document.addEventListener('keydown', (event) => {
    if (event.key === ' '){
        rotate();
    }
   });

// Prueba con evento
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight'){
        moveRigth();
    }
   });
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft'){
        moveLeft();
    }
   });
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown'){
    moveDown();
}
});


const stop = setInterval(() => {     //para parar el setInterval es clearInterval(parar)
    if (currentTetromino.some((block) => (block+currentPosition+BOARD_WIDTH)>200)){
        aleatTetrominoe = generateRandomTetrominoe(tetrominos);
        currentRotation=0;
        currentTetromino = tetrominos[aleatTetrominoe.positionAtTetrominoeList][currentRotation];
        currentPosition = 3;
        drawTetrominoeInMainBoard(currentTetromino);
    } else {
        moveDown();
    }
}, 1000);