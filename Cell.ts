class Cell {
  readonly x: number;
  readonly y: number;
  readonly alive: boolean;

  private constructor(x: number, y: number, alive: boolean) {
    this.x = x;
    this.y = y;
    this.alive = alive;
  }

  of(x: number, y: number, alive: boolean) {
    return new Cell(x, y, alive);
  }
}
