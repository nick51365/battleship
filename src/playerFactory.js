import { gameboardFactory } from "./gameboardFactory";


let playerFactory = (id) => {

    //game board belonging to this player
    let board = gameboardFactory();

    //send an attack to enemy's board
    let sendAttack = (players, row, column) => {
        //Find enemy player in playerList and attack
        for(let i = 0; i < players.array.length; i++){
            if (players.array[i].id != id){
                players.array[i].board.receiveAttack(row, column);
            }
        }
    };

    //send a computer attack
    let compAttack = (players) => {

        //Generate random coordinates
        let row = Math.floor(Math.random() * 10);
        let column = Math.floor(Math.random() * 10);
        let coords = [row, column];
   
        //Iterate through player list
        for(let i = 0; i < players.array.length; i++){

            //When enemy is found
            if (players.array[i].id != id){  

                //Iterate through enemy's takenShots array
                for(let j = 0; j < players.array[i].board.takenShots.length; j++){

                    //If space has already been attacked, pick new coords
                    if (arraysMatch(players.array[i].board.takenShots[j], coords)){
                            compAttack(players);
                        }
                    }
                    players.array[i].board.receiveAttack(row, column);  
                    return [row, column];  
            }      
        };
    };

    //Returns true if arrays match or false if not
    var arraysMatch = function (arr1, arr2) {

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
    
        return true;
    };

    return{id,board,sendAttack,compAttack};
};

export{
    playerFactory,
}