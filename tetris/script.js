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
drowBoard('.boards__container--big', 20, 10);
drowBoard('.boards__container--small', 4, 4);
document.querySelectorAll('.block')