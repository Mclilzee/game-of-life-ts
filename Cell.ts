class Cell {
  readonly x;
  readonly y;

  private constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static of(x: number, y: number) {
    return new Cell(x, y);
  }
}

export default Cell;
