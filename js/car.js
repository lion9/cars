// CAR

var carAngle = 0;
var carX;
var carY;
var carSpeed = 0;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_Turnright = false;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.3;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03; 
const MIN_SPEED_TO_TURN = 0.1; 


function carReset() {
    for (var i = 0; i < tracksGrid.length; i++) {
        var track = tracksGrid[i];
        if (track.state == TRACK_PLAYER_START) {
            carX = Math.floor(tracksGrid.indexOf(track) % TRACKS_COL) * TRACK_WIDTH + TRACK_WIDTH / 2;
            carY = Math.floor(tracksGrid.indexOf(track) / TRACKS_COL) * TRACK_HEIGHT + TRACK_HEIGHT / 2;
            carAngle = -Math.PI / 2;
            console.log(carX + ' : ' + carY);
        }
    }
}

function carMove() {
    carSpeed *= 0.99;
    if (keyHeld_Gas) {
        carSpeed += DRIVE_POWER;
    }
    if (keyHeld_Reverse) {
        carSpeed -= REVERSE_POWER;
    }
    if (Math.abs(carSpeed) >= MIN_SPEED_TO_TURN) {
        if (keyHeld_TurnLeft) {
            carAngle -= TURN_RATE;
        }
        if (keyHeld_Turnright) {
            carAngle += TURN_RATE;
        }
    }

    carX += Math.cos(carAngle) * carSpeed;
    carY += Math.sin(carAngle) * carSpeed;
}

function checkCollision() {
    for (var i = 0; i < tracksGrid.length; i++) {
        var track = tracksGrid[i];

        var carCol = Math.floor(carX / TRACK_WIDTH);
        var carRow = Math.floor(carY / TRACK_HEIGHT);

        var trackCol = Math.floor(track.x / TRACK_WIDTH);
        var trackRow = Math.floor(track.y / TRACK_HEIGHT);

        
        if (carCol == trackCol && carRow == trackRow && (track.state == TRACK_WALL || track.state == TRACK_FLAG)) {
            carSpeed = -carSpeed;
        }
    }
}

function carDraw() {
        drawBitmapCenteredWithRotarion(carPic, carX, carY, carAngle);
}