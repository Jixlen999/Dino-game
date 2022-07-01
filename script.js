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

let isAlive = setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	let cactusLeft = parseInt(
		window.getComputedStyle(cactus).getPropertyValue("left")
	);

	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 170) {
		alert("Game Over");
	}
}, 10);
