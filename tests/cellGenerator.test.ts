import generateCells, { Cell } from "../cellGenerator";
import { expect, describe, test } from "bun:test";

describe("Generate a map of live cells", () => {
  test("If empty list provided, it returns empty", () => {
    const aliveCells: Cell[][] = [];
    expect(generateCells(aliveCells)).toEqual([]);
  });
});
