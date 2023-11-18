class Helper {

    static canvas = document.getElementById("canvas");
    static context = canvas.getContext("2d");
    static centerX = canvas.width / 2;
    static centerY = canvas.height / 2;
    static N = "N";
    static S = "S";
    static E = "E";
    static W = "W";

    static canvasWidth;
    static canvasHeight;

    static offset = 30;

    constructor(canvasWidth, canvasHeight) {

        Helper.canvasWidth = canvasWidth;
        Helper.canvasHeight = canvasHeight;

    }

    // static drawEndline(randomX, randomY) {

    //     console.log("end line direction is: " + path[path.length - 1].direction);


    // }

    static clearCircle(x, y, background_color) {

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");

        context.fillStyle = background_color;

        console.log("width is: " + Helper.canvas.style.width + " height is: " + Helper.canvas.style.height);

        context.fillRect(0, 0, Helper.canvas.style.width, Helper.canvas.style.height);
    }


    static drawSpider = function (x, y) {

        var logoImg = new Image();
        logoImg.onload = function () {

            // At this point, the image is fully loaded
            // So do your thing!
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            //ctx.fillStyle = color;
            // ctx.drawImage(logoImg, x * Helper.offset + 4, y * Helper.offset + 4, Helper.offset - 10, Helper.offset - 10);

            if (Helper.offset >= 20) {
                ctx.drawImage(logoImg, x * Helper.offset + 4, y * Helper.offset + 4, Helper.offset - 10, Helper.offset - 10);
                //Helper.drawCircle(x, y, "red");
                // ctx.beginPath();
                // ctx.arc(x, y, Helper.offset / 2, 0, 2 * Math.PI, false);
                // ctx.fill();
                //   logoImg.src = "images/spider.png";
            }
            else {
                ctx.drawImage(logoImg, x * Helper.offset + 3, y * Helper.offset + 3, Helper.offset - 5, Helper.offset - 5);

                //  logoImg.src = "images/spider_small.png";
            }
            //logoImg.src = "images/spider.gif";
        };

        if (Helper.offset >= 20) {

            logoImg.src = "images/spider.png";
        }
        else {

            logoImg.src = "images/spider_small.png";
        }


        // ctx.beginPath();
        // ctx.arc(x, y, Helper.offset / 2, 0, 2 * Math.PI, false);
        // ctx.fill();
    }


    static drawFrame = function (width, height, color) {

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");

        let bw = width * Helper.offset;

        let bh = height * Helper.offset;

        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = 4;

        // context.rect(0, 0, bw, bh);
        context.rect(canvas.width / 2 - bw / 2, canvas.height / 2 - bh / 2, bw, bh);
        // canvas.width = bw;
        // canvas.height = bh;

        context.closePath();
        context.stroke();
    }

    static drawCircle = function (x, y, color) {

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");

        context.fillStyle = color;
        context.lineWidth = 2;

        // setTimeout(() => {
        //     console.log("Delayed");
        context.beginPath();
        context.arc(x, y, Helper.offset / 4, 0, 2 * Math.PI, false);
        context.fill();
        // }, "1000")
    }

    static drawLargeCircle = function (x, y, color) {

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");

        context.fillStyle = color;
        context.lineWidth = 2;


        // setTimeout(() => {
        //     console.log("Delayed");
        context.beginPath();
        context.arc(x, y, Helper.offset / 2, 0, 2 * Math.PI, false);
        context.fill();

        // }, "1000")


    }


    static drawArrow(fromx, fromy, direction) {

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");
        context.strokeStyle = "purple";
        context.lineWidth = 4;
        context.beginPath();

        let x = fromx;
        let y = fromy;
        let tox, toy = 0;

        switch (direction) {

            case Helper.S:
                // Helper.context.moveTo(x * Helper.offset + 4, y * Helper.offset + Helper.offset);
                // // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                // Helper.context.lineTo(x * Helper.offset + Helper.offset - 4, y * Helper.offset + Helper.offset);
                //fromx = fromx * Helper.offset + Helper.offset / 2 - Helper.offset;
                //fromy = fromy * Helper.offset + Helper.offset / 2 - Helper.offset;

                // tox = tox * Helper.offset + Helper.offset / 2 - Helper.offset;
                //toy = toy * Helper.offset + Helper.offset / 2 - Helper.offset;
                // fromx = fromx * Helper.offset + Helper.offset / 2;
                // fromy = fromy * Helper.offset + Helper.offset / 2;

                // tox = tox * Helper.offset + Helper.offset / 2;
                // toy = toy * Helper.offset + Helper.offset / 2 + Helper.offset;

                // var dx = tox - fromx;
                // var dy = toy - fromy;
                tox = x;
                toy = y + Helper.offset;
                // var angle = Math.atan2(dy, dx);
                // console.log("dx is: " + dx + " dy is: " + dy);
                // context.clearRect(0,0,Helper.canvas.style.width,Helper.canvas.style.height);
                // // console.log("angle is: " + angle);
                // context.beginPath();
                // context.moveTo(fromx, fromy);
                // context.lineTo(tox, toy);
                // context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));

                // context.moveTo(tox, toy);
                // context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
                // context.stroke();
                //  context.closePath();
                // Helper.drawArrow(x2, y2, tox, toy);

                // Helper.drawCircle(x2, y2, "red");
                // let canvas2 = document.getElementById("canvas");
                // let context2 = canvas2.getContext("2d");
                // context2.beginPath();
                // context2.fillStyle = color;
                // context2.arc(x * Helper.offset + Helper.offset / 2, y * Helper.offset + Helper.offset / 2, Helper.offset / 4, 0, 2 * Math.PI, false);
                // context2.fill();
                // context2.closePath();

                break;
            case Helper.N:
                // Helper.context.moveTo(x * Helper.offset + 4, y * Helper.offset);
                // //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // // Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + x * Helper.offset , Helper.centerY - y * Helper.offset);
                // //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                // Helper.context.lineTo(x * Helper.offset + Helper.offset - 4, y * Helper.offset);
                tox = x;
                toy = y - Helper.offset;
                break;
            case Helper.E:
                // Helper.context.moveTo(x * Helper.offset, y * Helper.offse);
                // //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);
                // Helper.context.lineTo(x * Helper.offset, y * Helper.offset + Helper.offset);
                // break;
                tox = x - Helper.offset;
                toy = y;
            case Helper.W:
                // Helper.context.moveTo(x * Helper.offset + Helper.offset, y * Helper.offset);
                // // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset + Helper.offset);
                // //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);
                tox = x + Helper.offset;;
                toy = y;
                break;
            // default:
            //     console.log("breaking");
            //     break;


        }



        var headlen = 10; // length of head in pixels
        var dx = tox - fromx;
        var dy = toy - fromy;
        var angle = Math.atan2(dy, dx);
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
        context.moveTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));

        context.stroke();

    }

    // static removeDuplicates(arr) {
    //     return arr.filter((item,
    //         index) => if(item.x arr.indexOf(item) === index );
    // }
    static getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v.x === value.x && v.y === value.y && count++));
        return count;
    }

    static removeDuplicates2(arr) {

        arr.forEach(function (e) {

            if (Helper.getOccurrence(arr, e) > 1) {


                //delete arr[i];
                // let index = arr.indexOf(e);
                let index = arr.indexOf(e);

                let removed = arr.splice(index, 1);
                console.log("More than one!!! - DELETING DUPLICATE: " + e.x + "," + e.y);
                //console.log("item deleted is: " + removed.x + "," + removed.y);
                console.log("index is: " + index);

            }
        })

    }

    static drawConnector(fromx, fromy, color, direction) {

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");

        // console.log("Inside drawConnector - direction is: " + direction);
        context.strokeStyle = color;

        if (Helper.offset >= 20)
            context.lineWidth = 4;
        else if (Helper.offset < 20)
            context.lineWidth = 2;

        context.beginPath();

        let x = fromx;
        let y = fromy;
        let tox, toy = 0;

        // console.log(fromx + "," + fromy + " is " + direction);

        switch (direction) {

            case Helper.S:

                tox = x;
                toy = y + Helper.offset - Helper.offset / 4;

                break;
            case Helper.N:

                tox = x;
                toy = y - Helper.offset + Helper.offset / 4;
                break;
            case Helper.E:

                tox = x + Helper.offset - Helper.offset / 4;
                toy = y;
                break;
            case Helper.W:

                tox = x - Helper.offset + Helper.offset / 4;
                toy = y;
                break;

        }



        // var headlen = 10; // length of head in pixels
        var dx = tox - fromx;
        var dy = toy - fromy;
        // var angle = Math.atan2(dy, dx);
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        // context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
        // context.moveTo(tox, toy);
        // context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));

        context.stroke();

    }

    static drawCircleArrow = function (x, y, tox, toy, color, direction) {

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");
        // context.strokeStyle = color;
        //context.fillStyle = null;
        context.strokeStyle = "purple";
        context.lineWidth = 4;

        var headlen = 10; // length of head in pixels

        let x2 = x * Helper.offset + Helper.offset / 2;
        let y2 = y * Helper.offset + Helper.offset / 2;



        switch (direction) {

            case Helper.S:
                // Helper.context.moveTo(x * Helper.offset + 4, y * Helper.offset + Helper.offset);
                // // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                // Helper.context.lineTo(x * Helper.offset + Helper.offset - 4, y * Helper.offset + Helper.offset);
                //fromx = fromx * Helper.offset + Helper.offset / 2 - Helper.offset;
                //fromy = fromy * Helper.offset + Helper.offset / 2 - Helper.offset;

                // tox = tox * Helper.offset + Helper.offset / 2 - Helper.offset;
                //toy = toy * Helper.offset + Helper.offset / 2 - Helper.offset;
                // fromx = fromx * Helper.offset + Helper.offset / 2;
                // fromy = fromy * Helper.offset + Helper.offset / 2;

                // tox = tox * Helper.offset + Helper.offset / 2;
                // toy = toy * Helper.offset + Helper.offset / 2 + Helper.offset;

                // var dx = tox - fromx;
                // var dy = toy - fromy;
                tox = x * Helper.offset + Helper.offset / 2;
                toy = y * Helper.offset + Helper.offset / 2 + Helper.offset;
                // var angle = Math.atan2(dy, dx);
                // console.log("dx is: " + dx + " dy is: " + dy);
                // context.clearRect(0,0,Helper.canvas.style.width,Helper.canvas.style.height);
                // // console.log("angle is: " + angle);
                // context.beginPath();
                // context.moveTo(fromx, fromy);
                // context.lineTo(tox, toy);
                // context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));

                // context.moveTo(tox, toy);
                // context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
                // context.stroke();
                //  context.closePath();
                Helper.drawArrow(x2, y2, tox, toy);

                Helper.drawCircle(x2, y2, "red");
                // let canvas2 = document.getElementById("canvas");
                // let context2 = canvas2.getContext("2d");
                // context2.beginPath();
                // context2.fillStyle = color;
                // context2.arc(x * Helper.offset + Helper.offset / 2, y * Helper.offset + Helper.offset / 2, Helper.offset / 4, 0, 2 * Math.PI, false);
                // context2.fill();
                // context2.closePath();

                break;
            case Helper.S:
                // Helper.context.moveTo(x * Helper.offset + 4, y * Helper.offset);
                // //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // // Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + x * Helper.offset , Helper.centerY - y * Helper.offset);
                // //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                // Helper.context.lineTo(x * Helper.offset + Helper.offset - 4, y * Helper.offset);

                break;
            case Helper.E:
            // Helper.context.moveTo(x * Helper.offset, y * Helper.offse);
            // //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
            // // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);
            // Helper.context.lineTo(x * Helper.offset, y * Helper.offset + Helper.offset);
            // break;
            case Helper.W:
                // Helper.context.moveTo(x * Helper.offset + Helper.offset, y * Helper.offset);
                // // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset + Helper.offset);
                // //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);

                break;
            default:
                console.log("breaking");
                break;


        }
        //   context.closePath();

        // }, "1000")


    }


    static drawLine = function (x, y, direction, color) {

        // var bw = width * Helper.offset;
        // // Box height
        // var bh = height * Helper.offset;

        // console.log("drawing " + previousCell.x + " and " + previousCell.y)
        // var bw = width * Helper.offset;
        // // // Box height
        // var bh = height * Helper.offset;
        Helper.context.strokeStyle = color;

        // this.context.beginPath();
        // this.context.arc(100, 75, 50, 0, 2 * Math.PI);
        // this.context.stroke();
        // this.context.closePath();
        Helper.context.lineWidth = 4;
        Helper.context.beginPath();



        //console.log("x is:  " + x + " and y is: " + y + " and direction is: " + direction);


        // setTimeout(function() {
        //your code to be executed after 1 second
        //  setTimeout(function(){ startTimer(p1, p2); }, 1000);
        // const intervalID = setInterval(function(){ myCallback('Parameter 1','Parameter 2') }, 1000);   
        // console.log(intervalID);     

        switch (direction) {

            case Helper.N:
                Helper.context.moveTo(x * Helper.offset + 4, y * Helper.offset + Helper.offset);
                // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                Helper.context.lineTo(x * Helper.offset + Helper.offset - 4, y * Helper.offset + Helper.offset);

                break;
            case Helper.S:
                Helper.context.moveTo(x * Helper.offset + 4, y * Helper.offset);
                //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + x * Helper.offset , Helper.centerY - y * Helper.offset);
                //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                Helper.context.lineTo(x * Helper.offset + Helper.offset - 4, y * Helper.offset);

                break;
            case Helper.E:
                Helper.context.moveTo(x * Helper.offset, y * Helper.offse);
                //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);
                Helper.context.lineTo(x * Helper.offset, y * Helper.offset + Helper.offset);
                break;
            case Helper.W:
                Helper.context.moveTo(x * Helper.offset + Helper.offset, y * Helper.offset);
                // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset + Helper.offset);
                //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);

                break;
            default:
                console.log("breaking");
                break;


        }
        //Helper.context.lineTo(20, 20);

        // }, 1);
        // Helper.context.moveTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2);
        // Helper.context.lineTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.moveTo(Helper.centerX / 2, Helper.centerY / 2);
        // Helper.context.lineTo(Helper.centerX / 2, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.moveTo(Helper.centerX / 2, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.lineTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);

        Helper.context.closePath();
        Helper.context.stroke();

    }

    static getDirection(cell1, cell2) {



    }



    static drawLine2 = function (x, y, direction, color) {

        Helper.context.strokeStyle = color;
        Helper.context.lineWidth = 2;
        Helper.context.beginPath();

        switch (direction) {

            case Helper.N:


                Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset);

                break;
            case Helper.S:
                Helper.context.moveTo(x * Helper.offset, y * Helper.offset + Helper.offset);
                //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + x * Helper.offset , Helper.centerY - y * Helper.offset);
                //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset + Helper.offset);

                break;
            case Helper.E:
                Helper.context.moveTo(x * Helper.offset + Helper.offset, y * Helper.offset);
                //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);
                Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset + Helper.offset);
                break;
            case Helper.W:
                Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                Helper.context.lineTo(x * Helper.offset, y * Helper.offset + Helper.offset);
                //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);

                break;
            default:
                console.log("breaking");
                break;
        }

        Helper.context.closePath();
        Helper.context.stroke();
    }

    static drawLine4 = function (x, y, direction, color) {

        let bw = Maze.width * Helper.offset;
        let bh = Maze.height * Helper.offset;
        Helper.context.strokeStyle = "black";
        Helper.context.lineWidth = 2;
        Helper.context.beginPath();

        switch (direction) {

            case Helper.N:

                Helper.context.moveTo(x * Helper.offset - Helper.canvas.width/2 - Maze.width/2, y * Helper.offset - Helper.canvas.height/2 - Maze.height/2);
                // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                Helper.context.lineTo(x * Helper.offset - Helper.offset + Helper.canvas.width/2 - Maze.width/2, y * Helper.offset - Helper.canvas.height/2 - Maze.height/2);

                break;
            case Helper.S:
                Helper.context.moveTo(x * Helper.offset, y * Helper.offset + Helper.offset);
                //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + x * Helper.offset , Helper.centerY - y * Helper.offset);
                //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset + Helper.offset);

                break;
            case Helper.E:
                Helper.context.moveTo(x * Helper.offset + Helper.offset, y * Helper.offset);
                //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);
                Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset + Helper.offset);
                break;
            case Helper.W:
                Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                Helper.context.lineTo(x * Helper.offset, y * Helper.offset + Helper.offset);
                //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);

                break;
            default:
                console.log("breaking");
                break;
        }

        //Helper.context.lineTo(20, 20);

        // }, 1);
        // Helper.context.moveTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2);
        // Helper.context.lineTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.moveTo(Helper.centerX / 2, Helper.centerY / 2);
        // Helper.context.lineTo(Helper.centerX / 2, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.moveTo(Helper.centerX / 2, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.lineTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);

        Helper.context.closePath();
        Helper.context.stroke();

    }

    static drawLine3 = function (x, y, direction, color) {

        Helper.context.strokeStyle = color;
        Helper.context.lineWidth = 2;
        Helper.context.beginPath();
        let fromx = x * Helper.offset + Helper.offset / 2;
        let fromy = y * Helper.offset + Helper.offset / 2;
        switch (direction) {

            case Helper.N:
                Helper.context.moveTo(fromx, fromy);
                // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                Helper.context.lineTo(fromx + Helper.offset, fromy);

                break;
            case Helper.S:
                Helper.context.moveTo(fromx, fromy + Helper.offset);
                //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + x * Helper.offset , Helper.centerY - y * Helper.offset);
                //Helper.context.lineTo(Helper.centerX - ( x * Helper.offset)/2 + Helper.offset, Helper.centerY - (y * Helper.offset)/2);
                Helper.context.lineTo(fromx + Helper.offset, fromy + Helper.offset);

                break;
            case Helper.E:
                Helper.context.moveTo(x * Helper.offset + Helper.offset, y * Helper.offset);
                //  console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);
                Helper.context.lineTo(x * Helper.offset + Helper.offset, y * Helper.offset + Helper.offset);
                break;
            case Helper.W:
                Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // console.log("have moved to: " + x * Helper.offset + "," + y * Helper.offset);
                Helper.context.lineTo(x * Helper.offset, y * Helper.offset + Helper.offset);
                //  Helper.context.moveTo(x * Helper.offset, y * Helper.offset);
                // Helper.context.lineTo(Helper.centerX - x * Helper.offset, Helper.centerY - y * Helper.offset + Helper.offset);

                break;
            default:
                console.log("breaking");
                break;
        }

        //Helper.context.lineTo(20, 20);

        // }, 1);
        // Helper.context.moveTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2);
        // Helper.context.lineTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.moveTo(Helper.centerX / 2, Helper.centerY / 2);
        // Helper.context.lineTo(Helper.centerX / 2, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.moveTo(Helper.centerX / 2, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);
        // Helper.context.lineTo(Helper.centerX / 2 + (previousCell.x * Helper.offset) + Helper.offset, Helper.centerY / 2 + (previousCell.y * Helper.offset) + Helper.offset);

        Helper.context.closePath();
        Helper.context.stroke();

    }

}