/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { gameboardFactory } from "../gameboardFactory";
import { shipFactory } from "../shipFactory";

test("creates 10x10 spaces grid of false booleans", () => {
    let testBoard = gameboardFactory();
    expect(testBoard.spaces).toStrictEqual([
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false],
    ]);
});

test("placeShip() works as intended", () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip(shipFactory(2), "horizontal", 3, 1);
    expect(testBoard.spaces[3][1]).toBe(true);
    expect(testBoard.spaces[3][2]).toBe(true);

    testBoard.placeShip(shipFactory(3), "vertical", 5, 5);
    expect(testBoard.spaces[5][5]).toBe(true);
    expect(testBoard.spaces[6][5]).toBe(true);
    expect(testBoard.spaces[7][5]).toBe(true);
});

test("placed ships stored in currentShips array", () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip(shipFactory(2),"horizontal",0,0);
    expect(testBoard.currentShips.length).toBe(1);
    testBoard.placeShip(shipFactory(2),"horizontal",0,0);
    expect(testBoard.currentShips.length).toBe(2);
});

test("sunk ships removed from currentShips array", () => {
    let testBoard = gameboardFactory();
    let testShip = shipFactory(2);
    testBoard.placeShip(testShip,"horizontal",0,0);
    testBoard.receiveAttack(0,0);
    testBoard.receiveAttack(0,1);
    expect(testBoard.currentShips.length).toBe(0);

});

test("receiveAttack() returns 'hit' or 'miss'", () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip(shipFactory(2), "horizontal", 0, 0);
    expect(testBoard.receiveAttack(0,0)).toBe("hit");
    expect(testBoard.receiveAttack(1,0)).toBe("miss");
});

test("takenShots contains all attacked coordinates", () => {
    let testBoard = gameboardFactory();
    testBoard.receiveAttack(4, 2);
    testBoard.receiveAttack(6, 9);
    expect(testBoard.takenShots).toStrictEqual([[4,2],[6,9]])
});

test("placeShip() updates ship.shipSpaces", () => {
    let testBoard = gameboardFactory();
    let testShip = shipFactory(3);
    testBoard.placeShip(testShip,"vertical",0,0);
    expect(testShip.shipSpaces).toStrictEqual([[0,0],[1,0],[2,0]])

});

test("receiveAttack() sends hit to correct ship", () => {
    let testBoard = gameboardFactory();
    let testShip = shipFactory(2);
    testBoard.placeShip(testShip,"horizontal",6,6);
    testBoard.receiveAttack(6,7);
    expect(testShip.hits).toStrictEqual([false, true]);
    testBoard.receiveAttack(6,6);
    expect(testShip.hits).toStrictEqual([true, true]);
    expect(testShip.isSunk()).toBe(true);
});

test("gameboard reports whether or not  all ships are sunk", () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip(shipFactory(2),"horizontal", 0, 0);
    testBoard.receiveAttack(0,0);
    testBoard.receiveAttack(0,1);
    expect(testBoard.allSunk.status).toBe(true);

});

//npm run test gameboardFactory.test.js