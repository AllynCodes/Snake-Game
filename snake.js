
//board
var blockSize = 25;
var rows = 20;
var cols = 40;
var board;
var context; //Drawing object

//Snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width - cols * blockSize;
    context = board.getContext("2d");   //Used for drawing on the board

    update();
}

function update(){
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
}