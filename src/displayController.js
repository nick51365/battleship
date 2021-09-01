import { mainLoop } from "./gameLoop";


let renderPage = () => {


    //Create flexbox for entire game display
    let gameWrapper = document.createElement("div");
    gameWrapper.id = "gameWrapper";
    document.body.append(gameWrapper);

    //Create player's board
    let playerWrapper = document.createElement("div");
    playerWrapper.className = "boardWrapper";
    gameWrapper.append(playerWrapper);
    let playerBoard = document.createElement("table");
    playerBoard.id = "playerBoard";
    playerBoard.className = "gameBoard";
    playerWrapper.append(playerBoard);

    //Create 10 x 10 grid on player's board
    for(let i = 0; i < 10; i++){
        let row = document.createElement("tr");
        playerBoard.append(row);
        for(let j = 0; j < 10; j++){

            //Generate two-digit ID number for cell
            let ID = ((i * 10) + j).toString();
            if (ID.length === 1){
                ID = "0" + ID;
            }

            let cell = document.createElement("td");
            cell.id = "player" + ID;
            row.append(cell);
        }
    }

    //Create computer player's board
    let compWrapper = document.createElement("div");
    compWrapper.className = "boardWrapper";
    gameWrapper.append(compWrapper);
    let compBoard = document.createElement("table");
    compBoard.id = "compBoard";
    compBoard.className = "gameBoard";
    compWrapper.append(compBoard);

    //Create 10 X 10 grid on computer's board
    for(let i = 0; i < 10; i++){
        let row = document.createElement("tr");
        compBoard.append(row);
        for(let j = 0; j < 10; j++){

            //Generate two-digit ID number for cell
            let ID = ((i * 10) + j).toString();
            if (ID.length === 1){
                ID = "0" + ID;
            }

            let cell = document.createElement("td");
            cell.id = "comp" + ID;
            row.append(cell);


            //When cell is clicked, attack corresponding space on board.spaces
            cell.addEventListener("click", () => {
                let gameBoard = mainLoop.array[1].board;           
                let attack = gameBoard.receiveAttack(ID[0],ID[1]);
                    if(attack == "hit"){
                        cell.style.backgroundColor = "red";
                    }

                console.log(ID[0],ID[1]);
                console.log(gameBoard);
            });        
        }
    }
};

export{
    renderPage
}