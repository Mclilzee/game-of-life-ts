import { countBy } from "ramda";
import Cell from "./Cell";

function updateCells(cells: Cell[]): Cell[] {
  const liveCells = cells.filter(cell => cell.alive);
  const touchingList = generateNeighboringMap(liveCells);
  const newCells = cells.map(cell => {
    const neighbors = touchingList[cell.toString()]

    if (neighbors === 3) {
      return Cell.of(cell.x, cell.y, true);
    }

    if (neighbors === 2 && cell.alive) {
      return Cell.of(cell.x, cell.y, true);
    }

    return Cell.of(cell.x, cell.y, false);
  });

  return newCells;
}

function generateNeighboringMap(cells: Cell[]) {
  const counter = countBy((cords: number[]) => cords[0].toString() + cords[1].toString());
  const map = counter(cells.flatMap(cell => getNeighbors(cell)));
  return map;
}
function getNeighbors(cell: Cell) {
  return [cell.x - 1, cell.x, cell.x + 1].flatMap(x =>
    [cell.y - 1, cell.y, cell.y + 1]
      .filter(y => !(cell.x == x && cell.y == y))
      .map(y => [x, y]));
}

export default updateCells;
