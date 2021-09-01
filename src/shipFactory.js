let shipFactory = (length) => {
    
    //"hits" array contains one boolean value for each ship space.
    //false = not hit, true = hit
    let hits = [];
    let buildHitsArray = (() => {
        for(let i = 0; i < length; i++){
            hits.push(false);
        }
    })();

    //Contains all coordinates ship is occupying
    let shipSpaces = [];
    
    //Takes a position and marks it as hit
    let hit = (pos) => {
        hits[pos] = true;
    };

    //Returns true if ship is sunk or false if not sunk
    let isSunk = () => {
        if (hits.includes(false)){
            return false;
        }else{
            return true;
        }
    };

    return {length,hits,shipSpaces,hit,isSunk};
};


export{
    shipFactory
}