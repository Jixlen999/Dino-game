cucuber = document.getElementById("cucuber");
mouse = document.getElementById("mouse");
cucuber.classList.add("moving");

document.addEventListener("keydown", function (event) {
	jump();
});

function jump() {
	if (cucuber.classList != "jump") {
		cucuber.classList.remove("moving");
		cucuber.classList.add("jump");
	}
	setTimeout(function () {
		cucuber.classList.remove("jump");
		cucuber.classList.add("moving");
	}, 1000);
}

let isGameOver = false;
let score = 0;
let scoreSpan = document.getElementById("score");
let scoreUpgrade = false;

let isAlive = setInterval(function () {
	let cucuberBot = parseInt(
		window.getComputedStyle(cucuber).getPropertyValue("bottom")
	);
	let cucuberLeft = parseInt(
		window.getComputedStyle(cucuber).getPropertyValue("left")
	);
	let mouseLeft = parseInt(
		window.getComputedStyle(mouse).getPropertyValue("left")
	);

	let mouseRight = parseInt(
		window.getComputedStyle(mouse).getPropertyValue("right")
	);

	if (mouseLeft <= cucuberLeft && mouseLeft > 0 && cucuberBot <= 30) {
		alert("Game Over");
		!isGameOver;
	}

	if (mouseRight === 100) {
		score++;
		scoreSpan.innerHTML = score;
	}
}, 10);
