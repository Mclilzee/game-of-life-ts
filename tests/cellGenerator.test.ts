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
      Cell.of(0, 0, false),
      Cell.of(0, 1, false),
      Cell.of(0, 2, false),
      Cell.of(0, 3, false),
      Cell.of(1, 0, false),
      Cell.of(1, 1, true),
      Cell.of(1, 2, true),
      Cell.of(1, 3, false),
      Cell.of(2, 0, false),
      Cell.of(2, 1, true),
      Cell.of(2, 2, true),
      Cell.of(2, 3, false),
      Cell.of(3, 0, false),
      Cell.of(3, 1, false),
      Cell.of(3, 2, false),
      Cell.of(3, 3, false),
    ]

    expect(generateCells(cells)).toEqual(cells);
  });

  test("Return blinker cells", () => {
    const cells = [
      Cell.of(0, 0, false),
      Cell.of(0, 1, true),
      Cell.of(0, 2, false),
      Cell.of(1, 0, false),
      Cell.of(1, 1, true),
      Cell.of(1, 2, false),
      Cell.of(2, 0, false),
      Cell.of(2, 1, true),
      Cell.of(2, 2, false),
    ]

    const expectedCells = [
      Cell.of(0, 0, false),
      Cell.of(0, 1, false),
      Cell.of(0, 2, false),
      Cell.of(1, 0, true),
      Cell.of(1, 1, true),
      Cell.of(1, 2, true),
      Cell.of(2, 0, false),
      Cell.of(2, 1, false),
      Cell.of(2, 2, false),
    ]

    // expect(generateCells(cells)).toEqual(expectedCells);
  });
});
