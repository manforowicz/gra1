hero = {
  x: 50,
  y: 50
}

addEventListener("keydown", function(event) {
	if (event.keyCode == 39) {
    x = x + 10;
  }
});

var main = function(canvas) {
  canvas.fillStyle = "red";
  canvas.fillRect(x, y, 40, 40);
  requestAnimationFrame(function() {
    main(canvas);
  });
}
