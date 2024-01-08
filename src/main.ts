import "./style.css";
import { range } from "ramda";
import Cell from "./Cell";
import updateCells from "./updateCells";

const rowSize = 100;
const columnSize = rowSize;

const generateCell = (x: number, y: number) => Cell.of(x, y, Math.random() >= 0.5 ? true : false);

const cells = range(0, rowSize).flatMap(x => range(0, columnSize).map(y => generateCell(x, y)));

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2Dcanvas;

function render() {
  updateCells(cells);
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].alive) {
    } else {
    }
  }

  setTimeout(() => {
    if (cells.find(cell => cell.alive)) {
      render();
    }
  }, 80);
}

render();
