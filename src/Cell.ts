export default class Cell {
  readonly x: number;
  readonly y: number;
  alive: boolean;

  private constructor(x: number, y: number, alive: boolean) {
    this.x = x;
    this.y = y;
    this.alive = alive;
  }

  static of(x: number, y: number, alive: boolean) {
    return new Cell(x, y, alive);
  }

  toString() {
    return this.x.toString() + this.y.toString();
  }
}
