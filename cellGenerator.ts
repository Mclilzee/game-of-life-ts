import { countBy } from "ramda";

export enum Cell {
  DEAD,
  ALIVE
}

type Cord = [number, number];

function generateCells(cells: Cell[][]): Cell[][] {
  return [];
}

function generateLiveCells(cells: Cell[][]) {
  return [];
}

function generateNeighboringMap(cords: Cord[]) {
  const counter = countBy((cord: Cord) => cord[0].toString() + cord[1].toString());
  return counter(cords.flatMap(cord => getNeighbors(cord)));
}
function getNeighbors(cell: Cord) {
  return [cell[0] - 1, cell[0], cell[0] + 1].flatMap(x =>
    [cell[1] - 1, cell[1], cell[1] + 1]
      .filter(y => !(cell[0] == x && cell[1] == y))
      .map(y => [x, y] as Cord));
}

export default generateCells;
