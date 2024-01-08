import "./style.css";
import { range } from "ramda";
import Cell from "./Cell";
import updateCells from "./updateCells";

const rowSize = 32;
const columnSize = rowSize;

const generateCell = (x: number, y: number) => Cell.of(x, y, Math.random() >= 0.5 ? true : false);

const cells = range(0, rowSize).flatMap(x => range(0, columnSize).map(y => generateCell(x, y)));

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

function render() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  updateCells(cells);

  ctx.fillStyle = "black";
  const width = canvas.width / columnSize;
  const height = canvas.height / rowSize;
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (cell.alive) {
      ctx.fillRect(cell.x * width, cell.y * height, width, height);
    }
  }

  setTimeout(() => {
    if (cells.find(cell => cell.alive)) {
      render();
    }
  }, 80);
}

render();
