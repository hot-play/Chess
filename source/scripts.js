//Эта функция создает шахматную доску
//This function creates a chessboard
function drawChessBoard() {
    let chessBoard = document.querySelector(".chess-board");
    let block;
    let flag = true;
    let edgingName = ["A", "B", "C", "D", "E", "F", "G", "H"];
    // Добавляем верхную окантовку с буквами
    block = document.createElement("div");
    block.className = "indent-edging";
    chessBoard.appendChild(block);
    for (let i = 0; i < 8; i++) {
        block = document.createElement("div");
        block.className = "t-edging";
        chessBoard.appendChild(block);
        block.innerText = edgingName[i];
    }
    block = document.createElement("div");
    block.className = "indent-edging";
    chessBoard.appendChild(block);
    //Добавляем доску и правую и левую окантовку
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            //Левая окантовка
            if (j == 1) {
                flag = !flag;
                block = document.createElement("div");
                block.className = "l-edging";
                chessBoard.appendChild(block);
                block.innerText = String(9 - i);
            }
            //Клетки доски
            block = document.createElement("div");
            block.id = String(i) + String(j);
            if (flag) block.className = "block black";
            else block.className = "block white";
            chessBoard.appendChild(block);
            flag = !flag;
            //Правая окантовка
            if (j == 8) {
                block = document.createElement("div");
                block.className = "r-edging";
                chessBoard.appendChild(block);
                block.innerText = String(9 - i);
            }
        }
    }
    // Добавляем нижнюю окантовку с буквами
    block = document.createElement("div");
    block.className = "indent-edging";
    chessBoard.appendChild(block);
    for (let i = 0; i < 8; i++) {
        block = document.createElement("div");
        block.className = "b-edging";
        chessBoard.appendChild(block);
        block.innerText = edgingName[i];
    }
    block = document.createElement("div");
    block.className = "indent-edging";
    chessBoard.appendChild(block);
}

//Эта функция очитски шахматной доски
//This chessboard cleaning function
function clearBoard() {
    let test = document.querySelectorAll(".Figure");
    for (let i = 0; i < test.length; i++) {
        test[i].outerHTML = "";
    }
}

//Эта функция расставляет фигуры на шахматной доске
//This function places a piece on the chessboard
function startGame() {
    clearBoard();
    let block;
    let figure;
    for (let i = 1; i <= 8; i++) {
        block = document.getElementById("2" + String(i));
        figure = document.createElement("div");
        figure.className = "block Figure blackPawnFigure";
        block.appendChild(figure);
        block = document.getElementById("7" + String(i));
        figure = document.createElement("div");
        figure.className = "block Figure whitePawnFigure";
        block.appendChild(figure);
    }
    block = document.getElementById("11");
    figure = document.createElement("div");
    figure.className = "block Figure blackRookFigure";
    block.appendChild(figure);
    block = document.getElementById("18");
    figure = document.createElement("div");
    figure.className = "block Figure blackRookFigure";
    block.appendChild(figure);
    block = document.getElementById("81");
    figure = document.createElement("div");
    figure.className = "block Figure whiteRookFigure";
    block.appendChild(figure);
    block = document.getElementById("88");
    figure = document.createElement("div");
    figure.className = "block Figure whiteRookFigure";
    block.appendChild(figure);

    block = document.getElementById("12");
    figure = document.createElement("div");
    figure.className = "block Figure blackKnightFigure";
    block.appendChild(figure);
    block = document.getElementById("17");
    figure = document.createElement("div");
    figure.className = "block Figure blackKnightFigure";
    block.appendChild(figure);
    block = document.getElementById("82");
    figure = document.createElement("div");
    figure.className = "block Figure whiteKnightFigure";
    block.appendChild(figure);
    block = document.getElementById("87");
    figure = document.createElement("div");
    figure.className = "block Figure whiteKnightFigure";
    block.appendChild(figure);

    block = document.getElementById("13");
    figure = document.createElement("div");
    figure.className = "block Figure blackBishopFigure";
    block.appendChild(figure);
    block = document.getElementById("16");
    figure = document.createElement("div");
    figure.className = "block Figure blackBishopFigure";
    block.appendChild(figure);
    block = document.getElementById("83");
    figure = document.createElement("div");
    figure.className = "block Figure whiteBishopFigure";
    block.appendChild(figure);
    block = document.getElementById("86");
    figure = document.createElement("div");
    figure.className = "block Figure whiteBishopFigure";
    block.appendChild(figure);

    block = document.getElementById("14");
    figure = document.createElement("div");
    figure.className = "block Figure blackQueenFigure";
    block.appendChild(figure);
    block = document.getElementById("15");
    figure = document.createElement("div");
    figure.className = "block Figure blackKingFigure";
    block.appendChild(figure);
    block = document.getElementById("84");
    figure = document.createElement("div");
    figure.className = "block Figure whiteQueenFigure";
    block.appendChild(figure);
    block = document.getElementById("85");
    figure = document.createElement("div");
    figure.className = "block Figure whiteKingFigure";
    block.appendChild(figure);
}
drawChessBoard();