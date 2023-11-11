import { range } from "ramda";
import Cell from "./Cell";
const rowSize = 100;
const columnSize = 100;

const generateCell = (x: number, y: number) => Cell.of(x, y, Math.random() > 0.3 ? true : false);

let cells = range(0, rowSize).flatMap(x => range(0, columnSize).map(y => generateCell(x, y)));
console.log(cells);

let cellElements = cells.map(cell => {
  const element = document.createElement("div");
  element.classList.add("cell");
  element.classList.add(cell.alive ? "alive" : "dead");
  return element;
});


const canvas = document.querySelector(".canvas") as HTMLDivElement;
cellElements.forEach(node => canvas.appendChild(node))

