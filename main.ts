import Cell from "./Cell";
import GameOfLife from "./GameOfLife";
const gameOfLife = new GameOfLife(8, 8);

const testCells = [Cell.of(1, 2), Cell.of(1, 2), Cell.of(2, 1), Cell.of(3, 2)];

gameOfLife.generateCells(testCells)
