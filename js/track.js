// TRACKS
const TRACK_WIDTH = 40;
const TRACK_HEIGHT = 40;
const TRACKS_COL = 20;
const TRACKS_ROW = 15;
const TRACK_GAP = 0;
const fillGridPattern =[[3,3,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,3],
                        [3,3,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,1],
                        [3,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1],
                        [1,0,0,0,0, 1,1,1,1,1, 1,1,1,1,1, 1,0,0,0,1],
                        [1,0,0,0,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,0,0,1],

                        [1,0,0,1,1, 0,0,1,1,1, 1,1,0,0,0, 0,1,0,0,1],
                        [1,0,0,1,0, 0,0,0,1,1, 1,0,0,0,0, 0,1,0,0,1],
                        [1,0,0,1,0, 0,0,0,0,1, 1,0,0,0,0, 0,1,0,0,1],
                        [1,0,0,1,0, 0,0,0,0,0, 1,0,0,0,0, 0,1,0,0,1],
                        [1,0,0,1,0, 0,0,0,0,0, 5,0,0,0,0, 0,1,0,0,1],

                        [1,0,2,1,0, 0,0,0,0,0, 0,0,0,1,0, 0,5,0,0,1],
                        [1,1,5,1,0, 0,0,1,0,0, 0,0,0,1,0, 0,0,0,0,1],
                        [1,0,0,0,0, 0,1,1,0,0, 0,0,0,1,0, 0,0,0,0,1],
                        [1,4,0,0,0, 0,1,1,0,0, 0,0,1,1,0, 0,0,0,0,1],
                        [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1]
                    ];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYER_START = 2;
const TRACK_FOREST = 3;
const TRACK_GOAL = 4;
const TRACK_FLAG= 5;


var tracksGrid = [];

function Track(x, y, w, h, state, fillColor) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = fillColor;
    this.state = state;
}

function drawTracks() {
    for (var i = 0; i < tracksGrid.length; i++) {
        var track = tracksGrid[i];
        var image = trackPics[tracksGrid[i].state];
        context.drawImage(image, track.x, track.y);
    }
}

function createGrid() {
    var counterX = 0;
    var counterY = 0;
    for (var y = 0 * TRACK_HEIGHT; y < TRACK_HEIGHT * TRACKS_ROW; y += TRACK_HEIGHT) {
        for (var x = 0; x < TRACK_WIDTH * TRACKS_COL; x += TRACK_WIDTH) {
            var track = new Track(x, y, TRACK_WIDTH - TRACK_GAP, TRACK_HEIGHT - TRACK_GAP, fillGridPattern[counterY][counterX], 'lightblue');
            tracksGrid.push(track);
            counterX++;
        }
        counterX = 0;
        counterY++;
    }
}

function clearScreen() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}