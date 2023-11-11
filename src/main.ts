import "./style.css";
import { range } from "ramda";
import Cell from "./Cell";
import updateCells from "./updateCells";

const rowSize = 100;
const columnSize = 100;

const generateCell = (x: number, y: number) => Cell.of(x, y, Math.random() >= 0.5 ? true : false);

const cells = range(0, rowSize).flatMap(x => range(0, columnSize).map(y => generateCell(x, y)));

let cellElements = cells.map(cell => {
  const element = document.createElement("div");
  element.classList.add("cell");
  if (cell.alive) {
    element.classList.add("alive");
  }
  return element;
});

const canvas = document.querySelector(".canvas") as HTMLDivElement;
canvas.style.display = "grid";
canvas.style.gridTemplateRows = `repeat(${rowSize}, 1fr)`;
canvas.style.gridTemplateColumns = `repeat(${columnSize}, 1fr)`;
cellElements.forEach(node => canvas.appendChild(node))

function displayChange() {
  updateCells(cells);
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].alive) {
      cellElements[i].classList.add("alive");
    } else {
      cellElements[i].classList.remove("alive");
    }
  }

  setTimeout(() => {
    if (cells.find(cell => cell.alive)) {
      displayChange();
    }
  }, 80);
}

displayChange();
