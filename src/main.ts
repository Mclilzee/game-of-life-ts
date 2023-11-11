import "./style.css";
import { range } from "ramda";
import Cell from "./Cell";
import updateCells from "./updateCells";
const rowSize = 100;
const columnSize = 100;

const generateCell = (x: number, y: number) => Cell.of(x, y, Math.random() < 0.2 ? true : false);

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
cellElements.forEach(node => canvas.appendChild(node))

function displayChange() {
  updateCells(cells);
  cells.forEach((cell, x) => {
    if (cell.alive) {
      cellElements[x].classList.add("alive")
    } else {
      cellElements[x].classList.remove("alive");
    }
  })

  setTimeout(() => {
    if (cells.find(cell => cell.alive)) {
      displayChange();
    }
  }, 100);
}

displayChange();
