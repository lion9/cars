var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };


var canvas, context;

canvas = document.getElementById('canvas');
context = canvas.getContext('2d');



window.onload = function() {
    document.body.appendChild(canvas);
    loadAllImages();
};

function imageLoadingDoneSoStartGame() {
    setupInput();
    animate(step);
}



var step = function() {
    updateAll();
    animate(step);
};

function drawAll() {
    // Draw tracks
    drawTracks();
    // Draw mouse position
    var mouseTrackCol = Math.floor(mouseX / TRACK_WIDTH);
    var mouseTrackRow = Math.floor(mouseY / TRACK_HEIGHT);
    carDraw();
}

function moveAll() {
    carMove();
    checkCollision();
}

function updateAll() {
    moveAll();
    drawAll();
}

