import { countBy } from "ramda";
import Cell from "./Cell";

function updateCells(cells: Cell[]): void {
  const liveCells = cells.filter(cell => cell.alive);
  const neighborsMap = generateNeighboringMap(liveCells);
  cells.forEach(cell => {
    const neighbors = neighborsMap[cell.toString()]

    if (neighbors === 3) {
      cell.alive = true;
    } else if (neighbors === 2 && cell.alive) {
      cell.alive = true;
    } else {
      cell.alive = false;
    }
  });
}

function generateNeighboringMap(cells: Cell[]) {
  const counter = countBy((cords: number[]) => cords[0].toString() + ":" + cords[1].toString());
  const map = counter(cells.flatMap(cell => getNeighbors(cell)));
  return map;
}

function getNeighbors(cell: Cell) {
  return [cell.x - 1, cell.x, cell.x + 1]
    .filter(x => x >= 0)
    .flatMap(x =>
      [cell.y - 1, cell.y, cell.y + 1]
        .filter(y => y >= 0)
        .filter(y => !(cell.x == x && cell.y == y))
        .map(y => [x, y]));
}

export default updateCells;
