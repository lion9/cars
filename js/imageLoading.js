var carPic = document.createElement('img');
var trackPics = [];
var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement('img');
    beginLoadingImage(trackPics[trackCode], fileName);
}

function beginLoadingImage(imvVar, fileName) {
    imvVar.onload = countLoadedImagesAndLaunchIfReady;
    imvVar.src = 'img/' + fileName;
}

function loadAllImages() {
    var imageList = [
        {varName: carPic, theFile: 'player1car.png'},

        {trackType: TRACK_ROAD, theFile: 'track_road.png'},
        {trackType: TRACK_WALL, theFile: 'track_wall.png'},
        {trackType: TRACK_FOREST, theFile: 'track_forest.png'},
        {trackType: TRACK_FLAG, theFile: 'track_flag.png'},
        {trackType: TRACK_PLAYER_START, theFile: 'track_road.png'},
        {trackType: TRACK_GOAL, theFile: 'track_goal.png'}
    ];
    

    picsToLoad = imageList.length;

    for(var i = 0; i <imageList.length; i++) {
        if(imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        } else {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        }
        
    }
}

