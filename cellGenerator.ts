import { countBy } from "ramda";

type Cell = [number, number];

function generateCells(cells: Cell[]) {
  const counter = countBy((cell: Cell) => cell[0].toString() + cell[1].toString());
  return counter(cells.flatMap(cell => getNeighboringCells(cell)));
}

function getNeighboringCells(cell: Cell) {
  return [cell[0] - 1, cell[0], cell[0] + 1].flatMap(x =>
    [cell[1] - 1, cell[1], cell[1] + 1]
      .filter(y => !(cell[0] == x && cell[1] == y))
      .map(y => [x, y] as Cell));
}

export default generateCells;
