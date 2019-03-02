// KEYS

const KEY_RIGHT_ARROW = 39;
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;

// MOUSE POSITION
var mouseX;
var mouseY;


function keyPressed(event) {
    console.log(event.keyCode);
    if (event.keyCode == KEY_LEFT_ARROW) {
        keyHeld_TurnLeft = true;
        console.log('carAngle: ' + carAngle);
    }
    if (event.keyCode == KEY_RIGHT_ARROW) {
        keyHeld_Turnright = true;
        console.log('carAngle: ' + carAngle);
    }
    if (event.keyCode == KEY_UP_ARROW) {
        keyHeld_Gas = true;
        console.log('carSpeed: ' + carSpeed);
    }
    if (event.keyCode == KEY_DOWN_ARROW) {
        keyHeld_Reverse = true;
        console.log('carSpeed: ' + carSpeed);
    }
}

function keyReleased(event) {
    if (event.keyCode == KEY_LEFT_ARROW) {
        keyHeld_TurnLeft = false;
        console.log('carAngle: ' + carAngle);
    }
    if (event.keyCode == KEY_RIGHT_ARROW) {
        keyHeld_Turnright = false;
        console.log('carAngle: ' + carAngle);
    }
    if (event.keyCode == KEY_UP_ARROW) {
        keyHeld_Gas = false;
        console.log('carSpeed: ' + carSpeed);
    }
    if (event.keyCode == KEY_DOWN_ARROW) {
        keyHeld_Reverse = false;
        console.log('carSpeed: ' + carSpeed);
    }
}

function updateMousePos(event) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = event.clientX - rect.left - root.scrollLeft;
    mouseY = event.clientY - rect.top - root.scrollTop;
}


function setupInput() {
    createGrid();
    carReset();
    document.addEventListener('mousemove', updateMousePos);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
}