import { renderPage } from "./displayController";
import { playerFactory } from "./playerFactory";
import { shipFactory } from "./shipFactory";


//Object containing players array and function to add players
let playerListFactory = () => {
    let array = [];

    let addPlayers = (player1,player2) => {
        array.push(player1,player2);
    }

    return {array, addPlayers};
};

//Add ships to both game boards
let addShips = (players) => {
    players.array[1].board.placeShip(shipFactory(2), "horizontal",0,0);
    players.array[1].board.placeShip(shipFactory(2), "horizontal",1,0);
    players.array[1].board.placeShip(shipFactory(2), "horizontal",2,0);
    players.array[1].board.placeShip(shipFactory(2), "horizontal",3,0);
    players.array[1].board.placeShip(shipFactory(2), "horizontal",4,0);
    players.array[1].board.placeShip(shipFactory(2), "horizontal",5,0);

    players.array[0].board.placeShip(shipFactory(2), "horizontal",0,0);
    players.array[0].board.placeShip(shipFactory(2), "horizontal",1,0);
    players.array[0].board.placeShip(shipFactory(2), "horizontal",2,0);
    players.array[0].board.placeShip(shipFactory(2), "horizontal",3,0);
    players.array[0].board.placeShip(shipFactory(2), "horizontal",4,0);
    players.array[0].board.placeShip(shipFactory(2), "horizontal",5,0);
};

//Main game loop, immediately invoked
let mainLoop = (() => {

    //Initialize new game
    let players = playerListFactory();
    players.addPlayers(playerFactory(1), playerFactory(2));

    renderPage();

    addShips(players);
    
    //Player who makes the next move
    let whosTurn = players.array[0];




    return players;
})();

export{
    mainLoop
} 