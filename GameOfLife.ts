import Cell from "./Cell";
import { countBy } from "ramda";

class GameOfLife {
  readonly rows;
  readonly columns;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
  }

  generateCells(cells: Cell[]): Cell[] {
    const counter = countBy((cell: Cell) => cell.x + cell.y);
    console.log(counter(cells));
    return cells.flatMap(cell => this.getNeighboringCells(cell))
  }

  private getNeighboringCells(cell: Cell): Cell[] {
    return [cell.x - 1, cell.x, cell.x + 1].flatMap(x =>
      [cell.y - 1, cell.y, cell.y + 1]
        .filter(y => cell.x != x && cell.y != y)
        .map(y => Cell.of(x, y)));
  }
}
