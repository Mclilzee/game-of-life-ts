import generateCells from "../cellGenerator";
import { expect, describe, test } from "bun:test";

describe("Generate a map of cells that have adjacent live cells", () => {
  test("If empty list provided, it returns an empty map", () => {
    const aliveCells: [number, number][] = [];
    expect(generateCells(aliveCells)).toEqual({});
  });

  test("Returns correct adjacunt cells that are touching", () => {
    const aliveCells: [number, number][] = [[2, 2]];
    const expectedMap = {
      "11": 1,
      "12": 1,
      "13": 1,
      "21": 1,
      "23": 1,
      "31": 1,
      "32": 1,
      "33": 1,
    }

    expect(generateCells(aliveCells)).toEqual(expectedMap);
  });
});
