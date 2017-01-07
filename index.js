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
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "red";
  ctx.fillRect(hero.x, hero.y, 40, 40);
	
  requestAnimationFrame(function() {
    main(canvas);
  });
}
