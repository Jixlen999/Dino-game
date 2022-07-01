dino = document.getElementById("dino");
cactus = document.getElementById("cactus");
dino.classList.add("moving");

document.addEventListener("keydown", function (event) {
	jump();
});

function jump() {
	if (dino.classList != "jump") {
		dino.classList.remove("moving");
		dino.classList.add("jump");
	}
	setTimeout(function () {
		dino.classList.remove("jump");
		dino.classList.add("moving");
	}, 1000);
}

let isGameOver = false;
let score = 0;
let scoreSpan = document.getElementById("score");
let scoreUpgrade = false;

let isAlive = setInterval(function () {
	let dinoBot = parseInt(
		window.getComputedStyle(dino).getPropertyValue("bottom")
	);
	let dinoLeft = parseInt(
		window.getComputedStyle(dino).getPropertyValue("left")
	);
	let cactusLeft = parseInt(
		window.getComputedStyle(cactus).getPropertyValue("left")
	);

	let cactusRight = parseInt(
		window.getComputedStyle(cactus).getPropertyValue("right")
	);

	if (cactusLeft <= dinoLeft && cactusLeft > 0 && dinoBot <= 30) {
		alert("Game Over");
		!isGameOver;
	}
	console.log(cactusRight);
	if (cactusRight === 100) {
		score++;
		scoreSpan.innerHTML = score;
	}
}, 10);
