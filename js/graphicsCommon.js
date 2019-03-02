function drawBitmapCenteredWithRotarion(useBitmap, atX, atY, withAngle) {
    context.save();
    context.translate(atX, atY);
    context.rotate(withAngle);
    context.drawImage(useBitmap,-useBitmap.width / 2, -useBitmap.height / 2);
    context.restore();
}

function colorCircle(centerX, centerY, diameter, fillColor) {
    context.fillStyle = fillColor;
    context.beginPath();
    context.arc(centerX, centerY, diameter, 0,Math.PI*2, true);
    context.fill();
}

function colorRect(topLeftX, topLeftY,  boxWidth, boxHeight, fillColor) {
    context.fillStyle = fillColor;
    context.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

function colorText(text, textX,textY, fillColor) {
    context.fillStyle = fillColor;
    context.fillText(text, textX,textY);
}