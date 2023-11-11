import { countBy } from "ramda";
import Cell from "./Cell";

function generateCells(cells: Cell[]): Cell[] {
  const liveCells = cells.filter(cell => cell.alive);
  const touchingList = generateNeighboringMap(liveCells);
  return cells.map(cell => {
    const neighbors = touchingList[`${cell.toString}`];
    if (neighbors === 3) {
      return Cell.of(cell.x, cell.y, true);
    }

    if (neighbors < 2) {
      return Cell.of(cell.x, cell.y, false);
    }

    if (neighbors > 3) {
      return Cell.of(cell.x, cell.y, false);
    }

    return Cell.of(cell.x, cell.y, true);
  });
}

function generateNeighboringMap(cells: Cell[]) {
  const counter = countBy((cords: number[]) => cords[0].toString() + cords[1].toString());

  return counter(cells.flatMap(cell => getNeighbors(cell)));
}
function getNeighbors(cell: Cell) {
  return [cell.x - 1, cell.x, cell.x + 1].flatMap(x =>
    [cell.y - 1, cell.y, cell.y + 1]
      .filter(y => !(cell.x == x && cell.y == y))
      .map(y => [x, y]));
}

export default generateCells;
