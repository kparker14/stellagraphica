let grid = [];
let grid2 = [];
let grid3 = [];
let grid4 = [];
let goalx = 3;
let goaly = 3;

let solution2 = [];
let visualizer2 = null;
let foundCell = null;
let foundSpider = null;

let stack = [];
let stack2 = [];
DFSstack = {};
let correctPath = [];
let path = [];
visited = [];

let randomX = 0;
let randomY = 0;

const rows = Math.floor((window.innerHeight / 40) - 5)
const columns = Math.floor((window.innerWidth / 40) - 15)

function myCallback(a, b) {
    // Your code here
    // Parameters are purely optional.
    console.log(a);
    console.log(b);
}

class Cell {

    static N = "N";
    static S = "S";
    static E = "E";
    static W = "W";

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.visited = false;
        this.neighbors = [];
        this.unvisited = [];
        this.walls = [true, true, true, true];
        this.row = x;
        this.column = y;
        this.found = false;
        this.direction = null;
        this.visualizer = null;
    }

    shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    show() {
        if (!this.walls[0])
            cells[this.row * columns + this.column].style["border-top"] = "none";
        if (!this.walls[1])
            cells[this.row * columns + this.column].style["border-right"] = "none";
        if (!this.walls[2])
            cells[this.row * columns + this.column].style["border-bottom"] = "none";
        if (!this.walls[3])
            cells[this.row * columns + this.column].style["border-left"] = "none";

        if (this.visited)
            cells[this.row * columns + this.column].style.background = "rgb(255, 89, 16)";
    }


    findNeighbors = (cell) => {



        if (grid.find(cell => cell.x == this.x && cell.y == this.y - 1))
            this.neighbors.push(grid.find(cell => cell.x == this.x && cell.y == this.y - 1));

        if (grid.find(cell => cell.x == this.x && cell.y == this.y + 1))
            this.neighbors.push(grid.find(cell => cell.x == this.x && cell.y == this.y + 1));

        if (grid.find(cell => cell.x == this.x + 1 && cell.y == this.y))
            this.neighbors.push(grid.find(cell => cell.x == this.x + 1 && cell.y == this.y));

        if (grid.find(cell => cell.x == this.x - 1 && cell.y == this.y))
            this.neighbors.push(grid.find(cell => cell.x == this.x - 1 && cell.y == this.y));

        this.unvisited = this.neighbors;



        this.shuffle(this.unvisited);


    }


    static createMazeRowAndColDivs = () => {
        const mazeDiv = document.querySelector('#maze')
        for (let y = 0; y < rows; y++) {
            let row = document.createElement('div');
            row.classList.add('row');
            if (y === 0) row.classList.add('top-row');
            mazeDiv.appendChild(row);

            for (let x = 0; x < columns; x++) {
                let column = document.createElement('div');
                column.classList.add('cell');
                if (x === 0) column.classList.add('column-left');
                row.appendChild(column);
            }
        }
    }

}

let solution = [];
let cellFound = null;

class MazeSolver {
    // constructor(matrix) {
    //     this.myMaze = matrix;
    // }
    static getCell(x, y) {

        let temp = null;

        grid4.forEach(function (e) {

            if (e.x == x && e.y == y)
                temp = e;

        })
        //grid.indexof((cell));
        return temp;
    }

    static traverse(row, column, cell) {
        if (row === goalx && column === goaly) {
            console.log("FOUND!!!!!");
            return solution; // Return path. Caller can extend it
            //} else if (cell.found)) {
        }

        if (!cell) {
            console.log("cell is null");
            return solution;
        }

        console.log("cell.found is: " + cell.found);

        if (cell && !cell.found) {
            solution.push(cell);
            console.log("Inside traverse: cell is: " + cell.x + "," + cell.y);


            // this.myMaze[row][column] = 8;
            console.log("You passed by " + column + "," + row);
            const path = MazeSolver.traverse(column + 1, row, MazeSolver.getCell(column + 1, row))
                ?? MazeSolver.traverse(column, row + 1, MazeSolver.getCell(column, row + 1))
                ?? MazeSolver.traverse(column - 1, row, MazeSolver.getCell(column - 1, row))
                ?? MazeSolver.traverse(column, row - 1, MazeSolver.getCell(column, row - 1));
            //if (path) path.unshift([column, row]); // Extend the path found
            //return path;
            if (solution) ///path.unshift([column, row]); // Extend the path found
                return solution;
        }

        if (!cell.found) {
            cell.found = true;
            return solution;
        }
    }
}

class Maze {

    static current;
    static stack = [];
    static foundCell = false;
    static width;
    static height;

    constructor(x, y) {

        Maze.width = x;
        Maze.height = y;

        this.bw = Maze.width * Helper.offset;
        // // Box height
        this.bh = Maze.height * Helper.offset;
        // this.grid = Array.from(Array(Maze.width), () => new Array(this.length));
        this.p = Helper.offset;
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;

        // canvas.width = this.bw;
        // canvas.height = this.bh;

        this.visualizer = null;
    }

    createGridCells = () => {
        // console.log("length is:  " + this.grid[0].length);

        for (let i = 0; i < Maze.width; i++) {
            //let row = new Array(Maze.height);
            for (let j = 0; j < Maze.height; j++) {

                let newCell = new Cell(i, j);
                grid.push(newCell);

            }
        }
    }

    getAllNeighbors = function () {



        grid.forEach(function (_cell) {

            _cell.findNeighbors(_cell);
            // console.log("cell neighbors is: " + _cell.neighbors);
        });
    }

    static drawSolution(correctPathInput) {

        correctPathInput.forEach(function (inputCell) {
            // console.log("cell in CORRECTPATH is: " + inputCell.x + "," + inputCell.y);

            if (!inputCell.walls[0]) {
                //this.grid[this.row * columns + this.column].style["border-top"] = "none";
                //this.removeWall(theCell.walls[0]);
                //Helper.drawLine2(cell.x, cell.y, Helper.N, "white");
                let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
                //Helper.drawConnector(fromx, fromy, Helper.N);
                //   Helper.drawCircle(fromx, fromy, "red");

            }
            if (!inputCell.walls[1]) {
                // Helper.drawLine2(cell.x, cell.y, Helper.E, "white");
                //cells[this.row * columns + this.column].style["border-right"] = "none";
                //this.removeWall(theCell.walls[1]);
                let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
                //Helper.drawConnector(fromx, fromy, Helper.E);
                //   Helper.drawCircle(fromx, fromy, "red");


            }
            if (!inputCell.walls[2]) {
                // Helper.drawLine2(cell.x, cell.y, Helper.S, "white");
                //cells[this.row * columns + this.column].style["border-bottom"] = "none";
                ///this.removeWall(theCell.walls[2]);
                let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
                //Helper.drawConnector(fromx, fromy, Helper.S);
                //  Helper.drawCircle(fromx, fromy, "red");

            }
            if (!inputCell.walls[3]) {
                // Helper.drawLine2(cell.x, cell.y, Helper.W, "white");
                let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
                //Helper.drawConnector(fromx, fromy, Helper.W);
                //  Helper.drawCircle(fromx, fromy, "red");
            }
        });
    }

    static drawSolution2(correctPathInput) {

        correctPathInput.forEach(function (inputCell) {
            // console.log("cell is: " + cell.x + "," + cell.y);
            console.log("cell in CORRECTPATH is: " + inputCell.x + "," + inputCell.y);

            if (!inputCell.walls[0]) {
                //this.grid[this.row * columns + this.column].style["border-top"] = "none";
                //this.removeWall(theCell.walls[0]);
                //Helper.drawLine2(cell.x, cell.y, Helper.N, "white");
                let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
                //     Helper.drawConnector(fromx, fromy, Helper.N);
                //Helper.drawCircle(fromx, fromy, "red");

            }
            if (!inputCell.walls[1]) {
                // Helper.drawLine2(cell.x, cell.y, Helper.E, "white");
                //cells[this.row * columns + this.column].style["border-right"] = "none";
                //this.removeWall(theCell.walls[1]);
                let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
                //   Helper.drawConnector(fromx, fromy, Helper.E);
                //Helper.drawCircle(fromx, fromy, "red");
            }
            if (!inputCell.walls[2]) {
                // Helper.drawLine2(cell.x, cell.y, Helper.S, "white");
                //cells[this.row * columns + this.column].style["border-bottom"] = "none";
                ///this.removeWall(theCell.walls[2]);
                let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
                //   Helper.drawConnector(fromx, fromy, Helper.S);
                //Helper.drawCircle(fromx, fromy, "red");

            }
            if (!inputCell.walls[3]) {
                // Helper.drawLine2(cell.x, cell.y, Helper.W, "white");
                let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
                //     Helper.drawConnector(fromx, fromy, Helper.W);
                // Helper.drawCircle(fromx, fromy, "red");

            }

        });
    }

    static Update(time_ms) {

        let frame_delta_ms = time_ms - last_time_ms;

        let delta_s = frame_delta_ms / 1000;

        let fps = 1 / delta_s;

        frame_delta_ms = frame_delta_ms.toFixed(2);

        frame_delta_ms = parseFloat(frame_delta_ms);

        fps = fps.toFixed(2);

        if (path.length)
            Maze.updateGame(frame_delta_ms, path.pop());
        else
            return;

        // path.forEach(function (cell) {

        //     Maze.drawCell(cell, "circle");

        //     
        //     previousCell = cell;

        // });

        console.log("Update: delta time:" + frame_delta_ms + ", fps: " + fps);
        last_time_ms = time_ms;

        window.requestAnimationFrame(Maze.Update);
    }

    static animateCell(inputCell) {

        let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
        let fromy = inputCell.y * Helper.offset + Helper.offset / 2;


        Helper.clearCircle(fromx, fromy, "white", this.context);
        Helper.drawCircle(fromx, fromy, "green", this.context);
    }

    static drawCell(inputCell, drawType) {

        let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
        let fromy = inputCell.y * Helper.offset + Helper.offset / 2;
        //Helper.drawArrow(fromx, fromy, inputCell.direction);

        // console.log(inputCell.x + "," + inputCell.y + " is: " + inputCell.direction);

        if (drawType == "connector") {
            Helper.drawConnector(fromx, fromy, "orange", inputCell.direction);
            //Helper.drawArrow(fromx, fromy, inputCell.direction);
        }
        else if (drawType == "circle") {


            // Helper.drawCircle(fromx, fromy, "green", this.context);

            //Maze.drawCirclesAnimate(previousCell, cell);
        }
    }

    static updateGame(delta_ms, newCell) {

        //Helper.clearCircle(newCell.x, newCell.y, "white");
        // let x;
        // let y;

        let x = newCell.x * Helper.offset + Helper.offset / 2;
        let y = newCell.y * Helper.offset + Helper.offset / 2;

        // for (let i = 0; i <= 10; i++) {


        //     x = x + delta_ms * 0.05206;
        //y = y + delta_ms * 0.05206;
        // newCell.x = newCell.x + delta_ms * 0.05206;
        // newCell.y = newCell.y + delta_ms * 0.05206;
        //Helper.drawCircle(x, y, "green");
        Helper.drawConnector(x, y, "orange", newCell.direction);
        Helper.drawCircle(x, y, "green");
        // }

    }

    static drawCirclesAnimate(previousCell, newCell) {

        // let last_time_ms = 0;

        let x1 = previousCell.x;
        let y1 = previousCell.y;
        let x2 = newCell.x;
        let y2 = newCell.y;

        Helper.clearCircle(x1, y1, "white", Helper.context);
        Helper.drawCircle(x2, y2, "green", Helper.context);


        // window.requestAnimationFrame(Maze.Update);

    }

    static drawCell2(x, y, drawType, direction) {

        let fromx = x * Helper.offset + Helper.offset / 2;
        let fromy = y * Helper.offset + Helper.offset / 2;
        //Helper.drawArrow(fromx, fromy, inputCell.direction);

        //console.log(x + "," + y + " is: " + direction);

        if (drawType == "connector") {
            Helper.drawConnector(fromx, fromy, "orange", direction);
            //Helper.drawArrow(fromx, fromy, inputCell.direction);
        }
        // else if (drawType == "circle")
        //     Helper.drawCircle(fromx, fromy, "green");
    }

    static findpath = function (inputCell) {

        //console.log('entering function - inputCell is: ' + inputCell.x + ',' + inputCell.y);

        if (!inputCell.found) {
            inputCell.found = true;
        }

        if (inputCell.x == goalx && inputCell.y == goaly) {

            console.log("FOUND at: " + inputCell.x + ',' + inputCell.y + " !!!!!!");
            foundSpider = true;
            return true;
        }

        console.log("pushing: " + inputCell.x + "," + inputCell.y);



        if (inputCell.unvisited[0] && inputCell.unvisited[0].found == false) {

            if (Maze.findpath(inputCell.unvisited[0])) {
                //Maze.drawCell(inputCell, "circle");
                path.push(inputCell);
                return true;
            }
        }

        if (inputCell.unvisited[1] && inputCell.unvisited[1].found == false) {

            if (Maze.findpath(inputCell.unvisited[1])) {
                // Maze.drawCell(inputCell, "circle");
                path.push(inputCell);
                return true;
            }
        }

        if (inputCell.unvisited[2] && inputCell.unvisited[2].found == false) {

            if (Maze.findpath(inputCell.unvisited[2])) {
                // Maze.drawCell(inputCell, "circle");
                path.push(inputCell);
                return true;
            }
        }

        if (inputCell.unvisited[3] && inputCell.unvisited[3].found == false) {

            if (Maze.findpath(inputCell.unvisited[3])) {
                //  Maze.drawCell(inputCell, "circle");
                path.push(inputCell);
                return true;
            }

        }

    }

    static drawDots = function (inputCell) {

        let previousCell = inputCell;

        path.forEach(function (cell) {

            Maze.drawCell(cell, "circle");


            previousCell = cell;

        });

    }

    static drawAllCellDirections = function (inputCell) {

        let nextCell = null;
        let currentCell = inputCell;

        for (let i = 0; i < path.length; i++) {
            let currentCell = path[i];
            let nextCell = path[i + 1];
            if (nextCell) {
                Maze.setDirection(currentCell, nextCell);
            }
        }

        // for (let i = 0; i < path.length; i++) {
        //     //nextCell = path[i];
        //     //Maze.setDirection(path[i], nextCell);
        //     Maze.drawCell(path[i], "connector");
        // }

    }

    static drawConnectors = function (inputCell) {

        let nextCell = null;
        let currentCell = inputCell;



        for (let i = 0; i < path.length; i++) {
            let currentCell = path[i];
            let nextCell = path[i + 1];
            if (nextCell) {
                Maze.setDirection(currentCell, nextCell);
            }
        }

        for (let i = 0; i < path.length; i++) {
            //nextCell = path[i];
            //Maze.setDirection(path[i], nextCell);
            Maze.drawCell(path[i], "connector");
        }

        //console.log('entering function - inputCell is: ' + inputCell.x + ',' + inputCell.y);

        // if (!inputCell.found) {
        //     inputCell.found = true;
        // }

        // if (inputCell.x == goalx && inputCell.y == goaly) {

        //     console.log("FOUND at: " + inputCell.x + ',' + inputCell.y + " !!!!!!");
        //     foundSpider = true;
        //     return true;
        // }

        // if (inputCell.unvisited[0] && inputCell.unvisited[0].found == false) {

        //     if (Maze.drawConnectors(inputCell.unvisited[0])) {
        //         Maze.drawCell(inputCell, "connector");
        //         //console.log("inside findpath4, pushing unvisited 0: " + inputCell.x + "," + inputCell.y);

        //         return true;
        //     }
        // }

        // if (inputCell.unvisited[1] && inputCell.unvisited[1].found == false) {

        //     if (Maze.drawConnectors(inputCell.unvisited[1])) {
        //         Maze.drawCell(inputCell, "connector");
        //         // console.log("inside findpath4, pushing unvisited 1: " + inputCell.x + "," + inputCell.y);

        //         return true;
        //     }
        // }

        // if (inputCell.unvisited[2] && inputCell.unvisited[2].found == false) {

        //     if (Maze.drawConnectors(inputCell.unvisited[2])) {
        //         Maze.drawCell(inputCell, "connector");
        //         //  console.log("inside findpath4, pushing unvisited 2: " + inputCell.x + "," + inputCell.y);

        //         return true;
        //     }
        // }

        // if (inputCell.unvisited[3] && inputCell.unvisited[3].found == false) {

        //     // console.log("inside findpath4, pushing unvisited 3: " + inputCell.x + "," + inputCell.y);

        //     if (Maze.drawConnectors(inputCell.unvisited[3])) {
        //         Maze.drawCell(inputCell, "connector");
        //         return true;
        //     }

        // }

    }

    static recursiveSolve(inputCell) {

        console.log("inputCell is:  " + inputCell.x + "," + inputCell.y);

        if (inputCell.x == goalx && inputCell.y == goaly) {

            console.log("cell found!")
            return true; // If you reached the end
        }

        if (!inputCell || inputCell.found == true) {

            return false;
        }

        if (!inputCell.found) {
            inputCell.found = true;

        }

        if (inputCell.unvisited[3] && inputCell.unvisited[3].found == false) // Checks if not on left edge
            if (Maze.recursiveSolve(inputCell.unvisited[3])) { // Recalls method one to the left

                console.log("pushing:  " + inputCell.unvisited[3].x + "," + inputCell.unvisited[3].y);
                // correctPath.push(inputCell.unvisited[3]);
                Maze.processCells(inputCell.unvisited[3]);

                return true;
            }
        if (inputCell.unvisited[1] && inputCell.unvisited[1].found == false) // Checks if not on right edge
            if (Maze.recursiveSolve(inputCell.unvisited[1])) { // Recalls method one to the right

                console.log("pushing:  " + inputCell.unvisited[1].x + "," + inputCell.unvisited[1].y);
                // correctPath.push(inputCell.unvisited[1]);
                Maze.processCells(inputCell.unvisited[1]);
                return true;
            }
        if (inputCell.unvisited[0] && inputCell.unvisited[0].found == false)  // Checks if not on top edge
            if (Maze.recursiveSolve(inputCell.unvisited[0])) { // Recalls method one up
                //correctPath[x][y] = true;
                console.log("pushing:  " + inputCell.unvisited[0].x + "," + inputCell.unvisited[0].y);
                // correctPath.push(inputCell.unvisited[0]);
                Maze.processCells(inputCell.unvisited[0]);
                return true;
            }
        if (inputCell.unvisited[2] && inputCell.unvisited[2].found == false) // Checks if not on bottom edge
            if (Maze.recursiveSolve(inputCell.unvisited[2])) { // Recalls method one down
                //correctPath[x][y] = true;
                console.log("pushing:  " + inputCell.unvisited[2].x + "," + inputCell.unvisited[2].y);
                // correctPath.push(inputCell.unvisited[2]);
                Maze.processCells(inputCell.unvisited[2]);
                return true;
            }
        return false;
    }

    static findpath3(x, y) {

        if (x == goalx && y == goaly) {
            console.log('Reached goal at: ' + x + ':' + y);
            return true; // if it is the goal (exit point)
        }

        console.log('Im here at: ' + x + ':' + y);

        //grid2[y][x]=9; //here marking x,y position as part of solution path outlined by "9"

        if (Maze.findpath3(x + 1, y))
            return true;
        if (Maze.findpath3(x, y + 1))
            return true;
        if (Maze.findpath3(x, y - 1))
            return true;
        if (Maze.findpath3(x - 1, y))
            return true;

        // map[y][x]=8; //unmark x,y as part of solution path outlined by "8"

        return false;
    }


    static setWalls = function (currentCell, nextCell) {

        let x = currentCell.row - nextCell.row;

        if (x === 1) {
            currentCell.walls[3] = false;
            nextCell.walls[1] = false;

            //   currentCell.direction = Cell.W;
            //   console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);


        } else if (x === -1) {
            currentCell.walls[1] = false;
            nextCell.walls[3] = false;

            //  currentCell.direction = Cell.E;
            // console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        }
        else {
            // currentCell.walls[3] = true;
            // nextCell.walls[1] = true;
            // currentCell.walls[1] = true;
            // nextCell.walls[3] = true;
        }

        let y = currentCell.column - nextCell.column;

        if (y === 1) {
            currentCell.walls[0] = false;
            nextCell.walls[2] = false;

            //   currentCell.direction = Cell.N;
            //  console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        } else if (y === -1) {
            currentCell.walls[2] = false;
            nextCell.walls[0] = false;

            //  currentCell.direction = Cell.S;
            //  console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        }
        else {
            // currentCell.walls[0] = true;
            // nextCell.walls[2] = true;
            // currentCell.walls[2] = true;
            // nextCell.walls[0] = true;

        }

        // console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

    }

    static setDirection = function (currentCell, nextCell) {

        let x = currentCell.row - nextCell.row;

        if (x === 1) {
            // currentCell.walls[3] = false;
            // nextCell.walls[1] = false;

            currentCell.direction = Cell.W;
            console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);


        } else if (x === -1) {
            // currentCell.walls[1] = false;
            // nextCell.walls[3] = false;

            currentCell.direction = Cell.E;
            console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        }
        else {
            // currentCell.walls[3] = true;
            // nextCell.walls[1] = true;
            // currentCell.walls[1] = true;
            // nextCell.walls[3] = true;
        }

        let y = currentCell.column - nextCell.column;

        if (y === 1) {
            // currentCell.walls[0] = false;
            // nextCell.walls[2] = false;

            currentCell.direction = Cell.N;
            console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        } else if (y === -1) {
            // currentCell.walls[2] = false;
            // nextCell.walls[0] = false;

            currentCell.direction = Cell.S;
            console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        }
        else {
            // currentCell.walls[0] = true;
            // nextCell.walls[2] = true;
            // currentCell.walls[2] = true;
            // nextCell.walls[0] = true;

        }

        // console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

    }

    static setDirection2 = function (x1, y1, x2, y2) {

        let x = x1 - x2;

        if (x === 1) {
            // currentCell.walls[3] = false;
            // nextCell.walls[1] = false;

            return Cell.W;
            // console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);


        } else if (x === -1) {
            // currentCell.walls[1] = false;
            // nextCell.walls[3] = false;

            return Cell.E;
            //console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        }
        else {

            // currentCell.walls[3] = true;
            // nextCell.walls[1] = true;
            // currentCell.walls[1] = true;
            // nextCell.walls[3] = true;
        }

        let y = y1 - y2;

        if (y === 1) {
            // currentCell.walls[0] = false;
            // nextCell.walls[2] = false;

            return Cell.N;
            // console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        } else if (y === -1) {
            // currentCell.walls[2] = false;
            // nextCell.walls[0] = false;

            return Cell.S;
            //  console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

        }
        else {
            // currentCell.walls[0] = true;
            // nextCell.walls[2] = true;
            // currentCell.walls[2] = true;
            // nextCell.walls[0] = true;

        }

        // console.log("currentCell: " + currentCell.x + "," + currentCell.y + " nextCell: " + nextCell.x + "," + nextCell.y + " currentCell direction: " + currentCell.direction);

    }

    static generateMaze6 = function (inputCell) {

        console.log("entering function generateMaze6: " + inputCell.x + "," + inputCell.y);

        if (!inputCell.visited) {
            console.log("setting visited to true");

            inputCell.visited = true;
            // return true;
        }

        visited.push(inputCell);


        if (inputCell && inputCell.x == Maze.width - 1 && inputCell.y == Maze.height - 1) {

            console.log("returning: ");
            return true;
        }

        // if(!inputCell) {

        //     return false;
        // }

        // let unvisited = [];
        // for (let neighbor of inputCell.neighbors) {
        //     if (!neighbor.visited) {
        //         unvisited.push(neighbor);
        //         //    console.log("pushing neighbor: " + neighbor.x + "," + neighbor.y);
        //     }
        // }

        // while (!inputCell.visited) {
        while (true) {

            if (inputCell.unvisited.length == 0) {

                return true;
            }
            else {
                // while (unvisited.length > 0) {
                if (inputCell.unvisited[0] != undefined && !inputCell.unvisited[0].visited) {
                    Maze.setWalls(inputCell, inputCell.unvisited[0]);
                    //inputCell = inputCell.unvisited[0];
                    if (Maze.generateMaze6(inputCell.unvisited[0])) {

                        // console.log("AFTER setWalls");
                        return true;
                    }

                    // let cell2 = inputCell.unvisited[0];
                    // if (!cell2.walls[0] && !inputCell.walls[2]) {

                    //     let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                    //     let fromy = inputCell.y * Helper.offset + Helper.offset / 2;

                    //     let tox = inputCell.x * Helper.offset + Helper.offset / 2;
                    //     let toy = inputCell.y * Helper.offset + Helper.offset / 2 + Helper.offset;

                    //     Helper.drawArrow(fromx, fromy, tox, toy);
                    //     Helper.drawCircle(fromx, fromy, "red");


                    // }
                }

                else if (inputCell.unvisited[1] != undefined && !inputCell.unvisited[1].visited) {

                    Maze.setWalls(inputCell, inputCell.unvisited[1]);
                    //inputCell = inputCell.unvisited[1];
                    if (Maze.generateMaze6(inputCell.unvisited[1])) {

                        return true;
                    }

                    // let cell2 = inputCell.unvisited[1];
                    // if (!cell2.walls[1] && !inputCell.walls[3]) {

                    //     let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                    //     let fromy = inputCell.y * Helper.offset + Helper.offset / 2;

                    //     let tox = inputCell.x * Helper.offset + Helper.offset / 2 - Helper.offset;
                    //     let toy = inputCell.y * Helper.offset + Helper.offset / 2;

                    //     Helper.drawArrow(fromx, fromy, tox, toy);
                    //     Helper.drawCircle(fromx, fromy, "red");


                    // }
                }

                else if (inputCell.unvisited[2] != undefined && !inputCell.unvisited[2].visited) {
                    // this.removeWall(cell, cell.unvisited[2]);
                    // grid2.push(inputCell);
                    // Helper.drawLine(cell.unvisited[2].x, cell.unvisited[2].y, Helper.E, "white");
                    Maze.setWalls(inputCell, inputCell.unvisited[2]);
                    //inputCell = inputCell.unvisited[2];
                    if (Maze.generateMaze6(inputCell.unvisited[2])) {

                        return true;
                    }


                    // let cell2 = inputCell.unvisited[2];

                    // if (!cell2.walls[3] && !inputCell.walls[1]) {
                    //     //   console.log("cell2 is: " + cell2.x + "," + cell2.y + " east neighbor of: " + inputCell3.x + "," + inputCell3.y);
                    //     //  Helper.drawCircle(inputCell3.x, inputCell3.y, "green");
                    //     let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                    //     let fromy = inputCell.y * Helper.offset + Helper.offset / 2;

                    //     let tox = inputCell.x * Helper.offset + Helper.offset / 2 + Helper.offset;
                    //     let toy = inputCell.y * Helper.offset + Helper.offset / 2;

                    //     Helper.drawArrow(fromx, fromy, tox, toy);
                    //     Helper.drawCircle(fromx, fromy, "red");


                    // }
                }

                else if (inputCell.unvisited[3] != undefined && !inputCell.unvisited[3].visited) {
                    // this.removeWall(cell, cell.unvisited[3]);
                    //  grid2.push(inputCell);
                    //  Helper.drawLine(cell.unvisited[3].x, cell.unvisited[3].y, Helper.W, "white");
                    Maze.setWalls(inputCell, inputCell.unvisited[3]);
                    //inputCell = inputCell.unvisited[3];
                    if (Maze.generateMaze6(inputCell.unvisited[3])) {

                        return true;
                    }

                    // let cell2 = inputCell.unvisited[3];
                    // if (!cell2.walls[3] && !inputCell.walls[1]) {
                    //     //   console.log("cell2 is: " + cell2.x + "," + cell2.y + " east neighbor of: " + inputCell3.x + "," + inputCell3.y);
                    //     //  Helper.drawCircle(inputCell3.x, inputCell3.y, "green");
                    //     let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                    //     let fromy = inputCell.y * Helper.offset + Helper.offset / 2;

                    //     let tox = inputCell.x * Helper.offset + Helper.offset / 2 + Helper.offset;
                    //     let toy = inputCell.y * Helper.offset + Helper.offset / 2;

                    //     Helper.drawArrow(fromx, fromy, tox, toy);
                    //     Helper.drawCircle(fromx, fromy, "red");

                    // }

                }
            }
            // else {
            //     console.log("current cell inside generateMaze3 inside last else is: " + inputCell.x + "," + inputCell.y);
            //     //  grid2.push(Maze.current);
            // }

            // unvisited = [];
            // for (let neighbor of inputCell.neighbors) {
            //     if (!neighbor.visited) {
            //         unvisited.push(neighbor);
            //         //  console.log("pushing neighbor: " + neighbor.x + "," + neighbor.y);

            //     }
            // }
            // }
            //  let lastCell = grid.pop();

            // cell.visited = true;
            //}
            console.log("cell in loop is: " + inputCell.x + "," + inputCell.y);
        }


    }
    static generateMaze3 = function (inputCell) {


        if (!inputCell.visited) {
            inputCell.visited = true;

        }

        let unvisited = [];
        for (let neighbor of inputCell.neighbors) {
            if (!neighbor.visited) {
                unvisited.push(neighbor);
                //    console.log("pushing neighbor: " + neighbor.x + "," + neighbor.y);

            }
        }

        // while (!inputCell.visited) {

        while (unvisited.length > 0) {
            if (inputCell.unvisited[0] != undefined && inputCell.unvisited[0].visited == false) {

                Maze.setWalls(inputCell, inputCell.unvisited[0]);
                //inputCell = inputCell.unvisited[0];
                Maze.generateMaze3(inputCell.unvisited[0]);

                // let cell2 = inputCell.unvisited[0];
                // if (!cell2.walls[0] && !inputCell.walls[2]) {

                //     let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                //     let fromy = inputCell.y * Helper.offset + Helper.offset / 2;

                //     let tox = inputCell.x * Helper.offset + Helper.offset / 2;
                //     let toy = inputCell.y * Helper.offset + Helper.offset / 2 + Helper.offset;

                //     Helper.drawArrow(fromx, fromy, tox, toy);
                //     Helper.drawCircle(fromx, fromy, "red");


                // }
            }

            else if (inputCell.unvisited[1] != undefined && inputCell.unvisited[1].visited == false) {

                Maze.setWalls(inputCell, inputCell.unvisited[1]);
                //inputCell = inputCell.unvisited[1];
                this.generateMaze3(inputCell.unvisited[1]);

                // let cell2 = inputCell.unvisited[1];
                // if (!cell2.walls[1] && !inputCell.walls[3]) {

                //     let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                //     let fromy = inputCell.y * Helper.offset + Helper.offset / 2;

                //     let tox = inputCell.x * Helper.offset + Helper.offset / 2 - Helper.offset;
                //     let toy = inputCell.y * Helper.offset + Helper.offset / 2;

                //     Helper.drawArrow(fromx, fromy, tox, toy);
                //     Helper.drawCircle(fromx, fromy, "red");


                // }
            }

            else if (inputCell.unvisited[2] != undefined && inputCell.unvisited[2].visited == false) {
                // this.removeWall(cell, cell.unvisited[2]);
                // grid2.push(inputCell);
                // Helper.drawLine(cell.unvisited[2].x, cell.unvisited[2].y, Helper.E, "white");
                Maze.setWalls(inputCell, inputCell.unvisited[2]);
                //inputCell = inputCell.unvisited[2];
                Maze.generateMaze3(inputCell.unvisited[2]);

                // let cell2 = inputCell.unvisited[2];

                // if (!cell2.walls[3] && !inputCell.walls[1]) {
                //     //   console.log("cell2 is: " + cell2.x + "," + cell2.y + " east neighbor of: " + inputCell3.x + "," + inputCell3.y);
                //     //  Helper.drawCircle(inputCell3.x, inputCell3.y, "green");
                //     let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                //     let fromy = inputCell.y * Helper.offset + Helper.offset / 2;

                //     let tox = inputCell.x * Helper.offset + Helper.offset / 2 + Helper.offset;
                //     let toy = inputCell.y * Helper.offset + Helper.offset / 2;

                //     Helper.drawArrow(fromx, fromy, tox, toy);
                //     Helper.drawCircle(fromx, fromy, "red");


                // }
            }

            else if (inputCell.unvisited[3] != undefined && inputCell.unvisited[3].visited == false) {
                // this.removeWall(cell, cell.unvisited[3]);
                //  grid2.push(inputCell);
                //  Helper.drawLine(cell.unvisited[3].x, cell.unvisited[3].y, Helper.W, "white");
                Maze.setWalls(inputCell, inputCell.unvisited[3]);
                //inputCell = inputCell.unvisited[3];
                Maze.generateMaze3(inputCell.unvisited[3]);

                // let cell2 = inputCell.unvisited[3];
                // if (!cell2.walls[3] && !inputCell.walls[1]) {
                //     //   console.log("cell2 is: " + cell2.x + "," + cell2.y + " east neighbor of: " + inputCell3.x + "," + inputCell3.y);
                //     //  Helper.drawCircle(inputCell3.x, inputCell3.y, "green");
                //     let fromx = inputCell.x * Helper.offset + Helper.offset / 2;
                //     let fromy = inputCell.y * Helper.offset + Helper.offset / 2;

                //     let tox = inputCell.x * Helper.offset + Helper.offset / 2 + Helper.offset;
                //     let toy = inputCell.y * Helper.offset + Helper.offset / 2;

                //     Helper.drawArrow(fromx, fromy, tox, toy);
                //     Helper.drawCircle(fromx, fromy, "red");

                // }
            }
            else {
                console.log("current cell inside generateMaze3 inside last else is: " + inputCell.x + "," + inputCell.y);
                //  grid2.push(Maze.current);
            }

            unvisited = [];
            for (let neighbor of inputCell.neighbors) {
                if (!neighbor.visited) {
                    unvisited.push(neighbor);
                    //  console.log("pushing neighbor: " + neighbor.x + "," + neighbor.y);

                }
            }
        }
        //  let lastCell = grid.pop();

        // cell.visited = true;
        //}




        // if (cell.unvisited[0] != undefined && cell.unvisited[0].visited == false) {
        //     //this.generateMaze2(cell.unvisited[0]);
        //     Helper.drawLine(cell.unvisited[0].x, cell.unvisited[0].y, Helper.N, "white");
        // }
        // else
        //     return;

        // if (cell.unvisited[1] != undefined && cell && cell.unvisited[1].visited == false) {
        //     //this.generateMaze2(cell.unvisited[1]);
        //     Helper.drawLine(cell.unvisited[1].x, cell.unvisited[1].y, Helper.S, "white");
        // }
        // else
        // return;
        // if (cell.unvisited[2] != undefined && cell && cell.unvisited[2].visited == false) {
        //     //this.generateMaze2(cell.unvisited[2]);
        //     Helper.drawLine(cell.unvisited[2].x, cell.unvisited[2].y, Helper.E, "white");
        // }
        // else
        // return;
        // if (cell.unvisited[3] != undefined && cell && cell.unvisited[3].visited == false) {
        //     //this.generateMaze2(cell.unvisited[3]);
        //     Helper.drawLine(cell.unvisited[3].x, cell.unvisited[3].y, Helper.W, "white");
        // }
        // else
        // return;
        //newCell.visited = true;


        //}
    }



    static generateMaze4 = function (inputCell) {

        // console.log("inside generateMaze3 length of grid2 is: " + grid2.length);
        // cell.visited = true;
        //console.log("current is:  " + inputCell);
        // console.log("current cell inside generateMaze3 is: " + inputCell.x + "," + inputCell.y);

        if (!inputCell.visited) {
            inputCell.visited = true;
            // grid2.push(inputCell);
            //  console.log("Pushing stack");

            /// Maze.stack.push(inputCell);
            //  grid2.push(inputCell);
            // console.log("inside generateMaze3 length of grid2 is: " + grid2.length);


        }
        // else {
        //     console.log("inputCell is visited: " + inputCell.x + "," + inputCell.y);

        //     // grid2.push(inputCell);
        //     //  console.log("inside generateMaze3 length of grid2 is: " + grid2.length);
        // }
        //while (newcurrent.unvisited.length > 0) {
        // let unvisited = [];
        //  for (let neighbor of inputCell.neighbors) {
        //      if (!neighbor.visited) {
        //          unvisited.push(neighbor);
        // //         console.log("pushing neighbor: " + neighbor.x + "," + neighbor.y);

        //      }
        //  }

        // if (unvisited.length > 0) {
        //   let random = Math.floor(Math.random() * unvisited.length);
        //   let next = unvisited[random];
        // console.log("inside unvisited.length: " + unvisited.length);

        // let x = inputCell.row - next.row;

        // if (x === 1) {
        //     inputCell.walls[0] = false;
        //     next.walls[2] = false;
        //     //  Helper.drawLine(next.x, next.y, Helper.S, "white");
        //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.S, "white");
        // } else if (x === -1) {
        //     inputCell.walls[2] = false;
        //     next.walls[0] = false;
        //     //  Helper.drawLine(next.x, next.y, Helper.S, "white");
        //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.N, "white");
        // }

        // let y = inputCell.column - next.column;

        // if (y === 1) {
        //     inputCell.walls[3] = false;
        //     next.walls[1] = false;
        //     //   Helper.drawLine(next.x, next.y, Helper.S, "white");
        //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.E, "white");
        // } else if (y === -1) {
        //     inputCell.walls[1] = false;
        //     next.walls[3] = false;
        //     //   Helper.drawLine(next.x, next.y, Helper.S, "white");
        //     //   Helper.drawLine(inputCell.x, inputCell.y, Helper.W, "white");
        // }

        // inputCell = next;

        // } 
        // else if (Maze.stack.length > 0) {

        //    //  console.log("popping stack");
        //      // inputCell = Maze.stack.pop();
        //     // inputCell = current2;
        // } 
        // else {

        //     //   console.log("visualizer is: " + this.visualizer);

        //     //   console.log("clearing interval");
        //     //  clearInterval(inputCell.visualizer);
        //     //clearInterval(visualizer);
        //     //play = true;
        //     //Maze.grid[current.row * columns + current.column].style.background = "rgb(255, 89, 16)";
        //     // currents[goal.row * columns + goal.column].innerHTML = virus;
        //     // currents[current.row * columns + current.column].innerHTML = vaccine;
        //     // let random = Math.floor(Math.random() * currents.length)
        //     // if (random == 0) random = 1;
        //     // if (random == currents.length - 1) random - 2;
        //     // currents[random].innerHTML = vile //Create a vial
        //     //  generateVile() //On creation, generate a vial a second vial
        // }

        // console.log("the zeroth current is:  " + current.unvisited[0]);
        // console.log("the first current is:  " + current.unvisited[1]);
        // console.log("the second current is:  " + current.unvisited[2]);
        // console.log("the third current is:  " + current.unvisited[3]);

        // if (current.unvisited) {
        let unvisited = [];
        for (let neighbor of inputCell.neighbors) {
            if (!neighbor.visited) {
                unvisited.push(neighbor);
                //    console.log("pushing neighbor: " + neighbor.x + "," + neighbor.y);

            }
        }

        // while (!inputCell.visited) {

        while (unvisited.length > 0) {
            if (inputCell.unvisited[0] != undefined && inputCell.unvisited[0].visited == false) {
                //grid2.push(inputCell);
                // if north cell
                // if(cellType(cell, cell.unvisited[0]) == Cell.N) {
                //     Helper.drawLine(cell.unvisited[0].x, cell.unvisited[0].y, Helper.N, "white");
                // }
                // Helper.drawLine(cell.unvisited[0].x, cell.unvisited[0].y, Helper.N, "white");

                //this.removeWall(cell, cell.unvisited[0]);
                // let x = inputCell.row - inputCell.unvisited[0].row;

                // if (x === 1) {
                //     inputCell.walls[0] = false;
                //     inputCell.unvisited[0].walls[2] = false;
                //     //  Helper.drawLine(next.x, next.y, Helper.S, "white");
                //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.S, "white");
                // } else if (x === -1) {
                //     inputCell.walls[2] = false;
                //     inputCell.unvisited[0].walls[0] = false;
                //     //  Helper.drawLine(next.x, next.y, Helper.S, "white");
                //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.N, "white");
                // }

                // let y = inputCell.column - inputCell.unvisited[0].column;

                // if (y === 1) {
                //     inputCell.walls[3] = false;
                //     inputCell.unvisited[0].walls[1] = false;
                //     //   Helper.drawLine(next.x, next.y, Helper.S, "white");
                //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.E, "white");
                // } else if (y === -1) {
                //     inputCell.walls[1] = false;
                //     inputCell.unvisited[0].walls[3] = false;
                //     //   Helper.drawLine(next.x, next.y, Helper.S, "white");
                //     //   Helper.drawLine(inputCell.x, inputCell.y, Helper.W, "white");
                // }
                Maze.setWalls(inputCell, inputCell.unvisited[0]);
                //inputCell = inputCell.unvisited[0];
                Maze.generateMaze3(inputCell.unvisited[0]);
            }

            else if (inputCell.unvisited[1] != undefined && inputCell.unvisited[1].visited == false) {
                // this.removeWall(cell, cell.unvisited[1]);
                //grid2.push(inputCell);
                //Helper.drawLine(cell.unvisited[1].x, cell.unvisited[1].y, Helper.S, "white");
                // let x = inputCell.row - inputCell.unvisited[1].row;

                // if (x === 1) {
                //     inputCell.walls[0] = false;
                //     inputCell.unvisited[1].walls[2] = false;
                //     //  Helper.drawLine(next.x, next.y, Helper.S, "white");
                //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.S, "white");
                // } else if (x === -1) {
                //     inputCell.walls[2] = false;
                //     inputCell.unvisited[1].walls[0] = false;
                //     //  Helper.drawLine(next.x, next.y, Helper.S, "white");
                //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.N, "white");
                // }

                // let y = inputCell.column - inputCell.unvisited[0].column;

                // if (y === 1) {
                //     inputCell.walls[3] = false;
                //     inputCell.unvisited[1].walls[1] = false;
                //     //   Helper.drawLine(next.x, next.y, Helper.S, "white");
                //     //  Helper.drawLine(inputCell.x, inputCell.y, Helper.E, "white");
                // } else if (y === -1) {
                //     inputCell.walls[1] = false;
                //     inputCell.unvisited[1].walls[3] = false;
                //     //   Helper.drawLine(next.x, next.y, Helper.S, "white");
                //     //   Helper.drawLine(inputCell.x, inputCell.y, Helper.W, "white");
                // }

                Maze.setWalls(inputCell, inputCell.unvisited[1]);
                //inputCell = inputCell.unvisited[1];
                this.generateMaze3(inputCell.unvisited[1]);
            }

            else if (inputCell.unvisited[2] != undefined && inputCell.unvisited[2].visited == false) {
                // this.removeWall(cell, cell.unvisited[2]);
                // grid2.push(inputCell);
                // Helper.drawLine(cell.unvisited[2].x, cell.unvisited[2].y, Helper.E, "white");
                Maze.setWalls(inputCell, inputCell.unvisited[2]);
                //inputCell = inputCell.unvisited[2];
                Maze.generateMaze3(inputCell.unvisited[2]);
            }

            else if (inputCell.unvisited[3] != undefined && inputCell.unvisited[3].visited == false) {
                // this.removeWall(cell, cell.unvisited[3]);
                //  grid2.push(inputCell);
                //  Helper.drawLine(cell.unvisited[3].x, cell.unvisited[3].y, Helper.W, "white");
                Maze.setWalls(inputCell, inputCell.unvisited[3]);
                //inputCell = inputCell.unvisited[3];
                Maze.generateMaze3(inputCell.unvisited[3]);
            }
            else {
                console.log("current cell inside generateMaze3 inside last else is: " + inputCell.x + "," + inputCell.y);
                //  grid2.push(Maze.current);
            }

            unvisited = [];
            for (let neighbor of inputCell.neighbors) {
                if (!neighbor.visited) {
                    unvisited.push(neighbor);
                    //  console.log("pushing neighbor: " + neighbor.x + "," + neighbor.y);

                }
            }
        }
        //  let lastCell = grid.pop();

        // cell.visited = true;
        //}




        // if (cell.unvisited[0] != undefined && cell.unvisited[0].visited == false) {
        //     //this.generateMaze2(cell.unvisited[0]);
        //     Helper.drawLine(cell.unvisited[0].x, cell.unvisited[0].y, Helper.N, "white");
        // }
        // else
        //     return;

        // if (cell.unvisited[1] != undefined && cell && cell.unvisited[1].visited == false) {
        //     //this.generateMaze2(cell.unvisited[1]);
        //     Helper.drawLine(cell.unvisited[1].x, cell.unvisited[1].y, Helper.S, "white");
        // }
        // else
        // return;
        // if (cell.unvisited[2] != undefined && cell && cell.unvisited[2].visited == false) {
        //     //this.generateMaze2(cell.unvisited[2]);
        //     Helper.drawLine(cell.unvisited[2].x, cell.unvisited[2].y, Helper.E, "white");
        // }
        // else
        // return;
        // if (cell.unvisited[3] != undefined && cell && cell.unvisited[3].visited == false) {
        //     //this.generateMaze2(cell.unvisited[3]);
        //     Helper.drawLine(cell.unvisited[3].x, cell.unvisited[3].y, Helper.W, "white");
        // }
        // else
        // return;
        //newCell.visited = true;


        //}

    }



    drawBoard(color) {

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");
        // Box width
        let bw = Maze.width * Helper.offset;
        // Box height
        let bh = Maze.height * Helper.offset;
        //let p = 20;
        // let centerX = canvas.width / 2;
        // let centerY = canvas.height / 2;

        //context.textAlign = 'center';
        // canvas.style.width = 800;
        // canvas.style.height = 800;
        context.strokeStyle = color;
        context.lineWidth = 2;
        context.beginPath();

        // for (let x = 0; x <= bw - p; x += p) {
        //     for (let y = 0; y <= bh - p; y += p) {

        //         context.moveTo(centerX - (Maze.width + x)/2, centerY - (Maze.height + y)/2);
        //         context.lineTo(centerX - (Maze.width + x)/2 + p, centerY - (Maze.height + y)/2);
        //         context.moveTo(centerX - (Maze.width + x)/2, centerY - (Maze.height + y)/2);
        //         context.lineTo(centerX - (Maze.width + x)/2, centerY - (Maze.height + y)/2 + p);

        //         // context.moveTo(x, y);
        //         // context.lineTo(x + p, y);
        //         // context.moveTo(x, y);
        //         // context.lineTo(x, y + p);
        //     }

        // }
        // function drawBoard(){
        // for (var x = 0; x <= Maze.width * Helper.offset; x += 20) {
        //     context.moveTo(0.5 + x + p, p);
        //     context.lineTo(0.5 + x + p, bh + p);
        // }

        // for (var x = 0; x <= Maze.height * Helper.offset; x += 20) {
        //     context.moveTo(p, 0.5 + x + p);
        //     context.lineTo(bw + p, 0.5 + x + p);
        // }

        // for (let x = 0; x < Maze.width * Helper.offset; x += Helper.offset) {
        //     for (let y = 0; y < Maze.height * Helper.offset; y += Helper.offset) {

        //         // context.moveTo(x, y);
        //         // context.lineTo(x + Helper.offset, y);
        //         // context.moveTo(x, y);
        //         // context.lineTo(x, y + Helper.offset);

        //         context.moveTo(canvas.width/2 - x/2, canvas.height/2 - y/2);
        //         context.lineTo(x + Helper.offset, canvas.height/2 - y/2 );
        //         context.moveTo(canvas.width/2 - x/2, canvas.height/2 - y/2);
        //         context.lineTo(canvas.width/2 - x/2, y + Helper.offset);
        //     }
        // }

        

        //let y = Maze.height * Helper.offset;
        bw = Maze.width * Helper.offset;
        bh = Maze.height * Helper.offset;

        let yTop = canvas.height/2 - bh/2;
       // alert(y);

       // context.fillStyle = "black";

        for (let x = canvas.width/2 - bw/2; x < canvas.width/2 + bw/2; x += Helper.offset) {

           // context.arc(x, y, Helper.offset / 4, 0, 2 * Math.PI, false);
            context.moveTo(x, yTop);
            context.lineTo(x, yTop + Maze.height * Helper.offset);

        }

        let xLeft = canvas.width/2 - bw/2;

        for (let y = canvas.height/2 - bh/2; y < canvas.height/2 + bh/2; y += Helper.offset) {

            // context.arc(x, y, Helper.offset / 4, 0, 2 * Math.PI, false);
             context.moveTo(xLeft, y);
             context.lineTo(xLeft + Maze.width * Helper.offset, y);
 
         }


        // context.moveTo(x, y);
        // context.lineTo(x + Helper.offset, y);
        // context.moveTo(Maze.width * Helper.offset, 0);
        // context.lineTo(Maze.width * Helper.offset, Maze.height * Helper.offset);
        // context.moveTo(0, Maze.height * Helper.offset);
        // context.lineTo(Maze.width * Helper.offset, Maze.height * Helper.offset);


        // for (let x = 0; x <= Maze.height * Helper.offset; x += Helper.offset) {
        //     // context.moveTo(Helper.offset, x);
        //     // context.lineTo(bw + Helper.offset, x );
        // }

        // context.strokeStyle = "orange";
        // context.stroke();
        // }

        // for (let x = 0; x <= x * Helper.offset; x += Helper.offset) {
        //     for (let y = 0; y <= bh - p; y += p) {

        //         context.moveTo( (Maze.width + x), (Maze.height + y));
        //         context.lineTo((Maze.width + x) + p, (Maze.height + y));
        //         context.moveTo((Maze.width + x), (Maze.height + y));
        //         context.lineTo((Maze.width + x), (Maze.height + y) + p);

        //         // context.moveTo(x, y);
        //         // context.lineTo(x + p, y);
        //         // context.moveTo(x, y);
        //         // context.lineTo(x, y + p);
        //     }

        //  context.moveTo(centerX - (Maze.width + x)/2, centerY - (Maze.height + bh)/2);
        //   context.lineTo(centerX - (Maze.width + x)/2, centerY - (Maze.height + bh)/2 + p);

        // }
        //let img = document.getElementById("spider");
        //context.drawImage(img, 3 * Helper.offset, 3 * Helper.offset, Helper.offset, Helper.offset);
        ;

        context.closePath();

        //context.scale(1,1);
        // context.imageSmoothingEnabled = true;
        context.stroke();


        // context.beginPath();
        // context.strokeStyle = "black";
        // context.lineWidth = 2;
        // // draw border
        // // context.moveTo(centerX / 2 + 0, centerY / 2 + 0);
        // // context.lineTo(centerX / 2 + bw, centerY / 2 + 0);
        // // context.moveTo(centerX / 2 + bw, centerY / 2 + 0);
        // // context.lineTo(centerX / 2 + bw, centerY / 2 + bh);
        // // context.moveTo(centerX / 2 + bw, centerY / 2 + bh);
        // // context.lineTo(centerX / 2 + 0, centerY / 2 + bh);
        // // context.moveTo(centerX / 2 + 0, centerY / 2 + bh);
        // // context.lineTo(centerX / 2 + 0, centerY / 2 + 0);


        // context.stroke();
    }


    drawMaze = function () {

        grid.forEach(function (cell) {
            // console.log("cell is: " + cell.x + "," + cell.y);

            if (!cell.walls[0])
                //this.grid[this.row * columns + this.column].style["border-top"] = "none";
                //this.removeWall(theCell.walls[0]);
               // Helper.drawLine2(cell.x, cell.y, Helper.N, "white");
               Helper.drawLine4(cell.x, cell.y, Helper.N, "black");
            if (!cell.walls[1])
            Helper.drawLine4(cell.x, cell.y, Helper.E, "black");
               // Helper.drawLine2(cell.x, cell.y, Helper.E, "white");
            //cells[this.row * columns + this.column].style["border-right"] = "none";
            //this.removeWall(theCell.walls[1]);
            if (!cell.walls[2]) {
              //  Helper.drawLine2(cell.x, cell.y, Helper.S, "white");
              Helper.drawLine4(cell.x, cell.y, Helper.S, "black");
                //cells[this.row * columns + this.column].style["border-bottom"] = "none";
                ///this.removeWall(theCell.walls[2]);
            }
            if (!cell.walls[3]) {
             //   Helper.drawLine2(cell.x, cell.y, Helper.W, "white");
             Helper.drawLine4(cell.x, cell.y, Helper.W, "black");
            }

        });

    }
    drawMaze2 = function () {

        grid2.forEach(function (cell) {
            // console.log("cell is: " + cell.x + "," + cell.y);

            if (cell.walls[0] && cell.neighbors[0] && cell.neighbors[0].walls[2])
                //this.grid[this.row * columns + this.column].style["border-top"] = "none";
                //this.removeWall(theCell.walls[0]);
                Helper.drawLine2(cell.x, cell.y, Helper.N, "red");

            if (cell.walls[1] && cell.neighbors[1] && cell.neighbors[1].walls[3])
                Helper.drawLine2(cell.x, cell.y, Helper.E, "red");
            //cells[this.row * columns + this.column].style["border-right"] = "none";
            //this.removeWall(theCell.walls[1]);

            if (cell.walls[2] && cell.neighbors[2] && cell.neighbors[2].walls[0]) {
                Helper.drawLine2(cell.x, cell.y, Helper.S, "red");
                //cells[this.row * columns + this.column].style["border-bottom"] = "none";
                ///this.removeWall(theCell.walls[2]);

            }
            if (cell.walls[3] && cell.neighbors[3] && cell.neighbors[3].walls[1]) {
                Helper.drawLine2(cell.x, cell.y, Helper.W, "red");
            }

        });

    }
    carve_passages_from() {

        this.createGridCells();
        grid2 = grid;
        grid3 = grid;
        grid4 = grid;

        this.getAllNeighbors();

        this.drawBoard("red");

        Maze.current = grid[0];
        console.log("Maze.current is: " + Maze.current.x + "," + Maze.current.y);

        randomX = Math.floor(Math.random() * Maze.width);
        randomY = Math.floor(Math.random() * Maze.height);
        goalx = randomX;
        goaly = randomY;


        console.log("final grid2 length is: " + grid2.length);
    }
}

var hlp = new Helper(800, 800);
var mz = new Maze(20, 14);
mz.carve_passages_from();


Maze.generateMaze3(grid[0]);

mz.drawMaze();
Helper.drawFrame(Maze.width, Maze.height, "purple");

grid3.forEach(function (e) {

    e.found = false;
})

let startCell = grid3[0];

Maze.findpath(startCell);

grid3.forEach(function (e) {

    e.found = false;
})


//Maze.drawConnectors(startCell);
let firstCell = path[0];

console.log("firstCell is: " + firstCell.x + "," + firstCell.y);

Maze.drawCell2(randomX, randomY, "connector", Maze.setDirection2(randomX, randomY, firstCell.x, firstCell.y))


Helper.drawLargeCircle(Helper.offset / 2, Helper.offset / 2, "tomato");

let fromx = randomX * Helper.offset + Helper.offset / 2;
let fromy = randomY * Helper.offset + Helper.offset / 2;

// let last_time_ms = 0;
let last_time_ms = 0;

Maze.drawAllCellDirections(path[0]);
window.requestAnimationFrame(Maze.Update);


//Maze.drawDots(startCell);


Helper.drawLargeCircle(fromx, fromy, "gold");

// console.log("Lastcell is:  " + firstCell.x + "," + firstCell.y);
// console.log("random is:  " + randomX + "," + randomY);
// console.log("direction is: " + Maze.setDirection2(randomX, randomY, firstCell.x, firstCell.y));

//Helper.drawLine3(randomX, randomY, Maze.setDirection2(randomX, randomY, firstCell.x, firstCell.y), "blue");
Helper.drawSpider(randomX, randomY);

Helper.removeDuplicates2(path);

