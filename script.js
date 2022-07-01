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
let scoreDiv = document.getElementById("score");
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

	if (cactusLeft <= dinoLeft && cactusLeft > 0 && dinoBot <= 30) {
		alert("Game Over");
		!isGameOver;
	}

	// console.log(cactusLeft);
	// console.log(dinoLeft - 10);
	// if (cactusLeft >= dinoLeft - 12 && cactusLeft <= dinoLeft - 8) {
	// 	score++;
	//     if (scoreUpgrade) {
	//         return
	//     }
	// 	scoreDiv.innerHTML = score;
	// }
}, 10);
