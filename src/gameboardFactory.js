let gameboardFactory = () => {

    //10x10 grid of booleans to represent board spaces
    //true = space occupied by a ship, false = space not occupied
    let spaces = [];
    for (let i = 0; i < 10; i++){
        let row = [];
        spaces.push(row);
        for(let j = 0; j < 10; j++){
            row.push(false);
        }
    };

    //Array of all ships currently on the board
    let currentShips = [];

    //false = ships remain on board, true = all ships are sunk
    let allSunk = {status: false};

    //Coordinates of all spaces that have been attacked
    let takenShots = [];

    //Place a ship on the board
    let placeShip = (ship, orientation, row, column) => {
        if(orientation === "horizontal"){
            for(let i = 0; i < ship.length; i++){
                spaces[row][column + i] = true;
                ship.shipSpaces.push([row,column + i]);
            }
            currentShips.push(ship);
        }else if(orientation === "vertical"){
            for(let i = 0; i < ship.length; i++){
                spaces[row + i][column] = true;
                ship.shipSpaces.push([row + i,column]);
            }
            currentShips.push(ship);
        };
    };

    //Take a pair of coordinates and attack that board space
    let receiveAttack = (row, column) => {

        //If attack hits a ship
        if(spaces[row][column] === true){
            
            //Iterate through currentShips to find ship containing attacked coordinates
            //Mark that space in ship.hits as true
            for(let i = 0;i < currentShips.length; i++){
                for(let j = 0; j < currentShips[i].shipSpaces.length; j++){
                    //If shipSpaces(j) matches attacked coordinates
                    if(currentShips[i].shipSpaces[j][0] == row &&
                        currentShips[i].shipSpaces[j][1] == column){
                            currentShips[i].hit(j);
                            spaces[row][column] = false;
                    }                    
                }
                //If ship is sunk, remove from currentShips
                if(currentShips[i].isSunk() === true){
                    currentShips.splice(i,1);

                    //If no ships remain, change allSunk.status to true
                    if(currentShips.length === 0){
                        allSunk.status = true;
                    }
                }                
            };
            //Push attacked coordinates to takenShots array
            takenShots.push([row, column]);
            return "hit";

        //If attack does not hit a ship    
        }else if(spaces[row][column] === false){

            //Push attacked coordinates to takenShots array
            takenShots.push([row, column]);
            return "miss";
        }
    };

    return{spaces,takenShots,currentShips,allSunk,placeShip,receiveAttack};
};

export{
    gameboardFactory
}