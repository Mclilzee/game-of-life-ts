import generateCells from "../cellGenerator";
import Cell from "../Cell";
import { expect, describe, test } from "bun:test";

describe("Generate a map of live cells", () => {
  test("If empty list provided, it returns empty", () => {
    const cells: Cell[] = [];
    expect(generateCells(cells)).toEqual([]);
  });

  test("Return correct block", () => {
    const cells = [
      Cell.of(0, 0, true),
      Cell.of(0, 1, true),
      Cell.of(1, 0, true),
      Cell.of(1, 1, true),
    ]

    expect(generateCells(cells)).toEqual(cells);
  });
});
