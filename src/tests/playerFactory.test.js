/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { playerFactory } from "../playerFactory";
import { playerListFactory } from "../gameLoop.js";
import { shipFactory } from "../shipFactory";


test("player can attack enemy's game board", () => {
   let players = playerListFactory();
   players.addPlayers(playerFactory(1), playerFactory(2));
   players.array[0].sendAttack(players,0,0);
   expect(players.array[1].board.takenShots).toStrictEqual([[0,0]]);
});

test("player's attack registers on enemy ship", () => {
    let players = playerListFactory();
    players.addPlayers(playerFactory(1), playerFactory(2));

    players.array[0].board.placeShip(shipFactory(2), "horizontal", 0, 0)
    players.array[1].sendAttack(players,0,0);
    expect(players.array[0].board.currentShips[0].hits).toStrictEqual([true, false]);
    expect(players.array[0].board.allSunk.status).toBe(false);

    players.array[1].sendAttack(players,0,1);
    expect(players.array[0].board.currentShips.length).toBe(0);
    expect(players.array[0].board.allSunk.status).toBe(true);

});

test("compAttack() attacks a random, unattacked space",() => {
    let players = playerListFactory();
    players.addPlayers(playerFactory(1), playerFactory(2));

    let coords = players.array[0].compAttack(players);
    expect(players.array[1].board.takenShots).toEqual(expect.arrayContaining([coords]));

});

//npm run test playerFactory.test.js