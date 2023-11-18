$(document).ready(function (e) {

var filter = document.querySelector("#turbulence");
var frames = 1;

var rad = Math.PI / 180;
var bfx, bfy;

function freqAnimation() {
    frames += .2

    bfx = 0.03;
    bfy = 0.03;

    bfx += 0.005 * Math.cos(frames * rad);
    bfy += 0.005 * Math.sin(frames * rad);

    bf = bfx.toString() + " " + bfy.toString();
    filter.setAttributeNS(null, "baseFrequency", bf);

    window.requestAnimationFrame(freqAnimation);
}

window.requestAnimationFrame(freqAnimation);


});