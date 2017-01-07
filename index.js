hero = {
  x: 50,
  y: 50
}

addEventListener("keydown", function(event) {
	if (event.keyCode == 39) {
    hero.x = hero.x + 10;
  }
});

var main = function(canvas) {
  canvas.fillStyle = "red";
  canvas.fillRect(hero.x, hero.y, 40, 40);
  requestAnimationFrame(function() {
    main(canvas);
  });
}
