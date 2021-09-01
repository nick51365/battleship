/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { shipFactory } from "../shipFactory";


test("creates hits array of correct length", () => {
    let testShip = shipFactory(2);
    expect(testShip.hits).toStrictEqual([false, false]);
    let testShip2 = shipFactory(4);
    expect(testShip2.hits).toStrictEqual([false, false, false, false]);
});

test("hit() marks correct spot as hit", () => {
    let testShip = shipFactory(2);
    testShip.hit(0);
    expect(testShip.hits).toEqual([true, false]);
    testShip.hit(1);
    expect(testShip.hits).toEqual([true, true]);
});

test("isSunk() returns correct response", () => {
    let testShip = shipFactory(2);
    testShip.hit(0);
    expect(testShip.isSunk()).toBe(false);
    testShip.hit(1);
    expect(testShip.isSunk()).toBe(true);
});