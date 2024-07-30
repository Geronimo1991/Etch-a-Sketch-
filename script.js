const btn = document.querySelector("button");
btn.addEventListener("click", showPrompt);

function showPrompt(message) {
	const userInput = prompt("How many squares you want to have?");
	if (userInput > 100 || isNaN(userInput)) {
		showPrompt();
	} else {
		const blocks = document.querySelectorAll(".block");

		blocks.forEach((block) => block.parentNode.removeChild(block));
		generateBlocks(userInput);
	}
}

function generateBlocks(number) {
	const containerSize = 1000;
	const blockBorderSize = 1;
	const blockSize = containerSize / number - 2 * blockBorderSize;

	const container = document.querySelector(".container");

	container.setAttribute(
		"style",
		"max-width:" + containerSize + "px; max-height:" + containerSize + "px;"
	);

	for (i = 0; i < number * number; i++) {
		let div = document.createElement("div");
		div.classList.add("block");

		div.style.width = blockSize + "px";
		div.style.height = blockSize + "px";
		div.style.border = blockBorderSize + "px solid black";

		container.appendChild(div);
	}

	const blocks = document.querySelectorAll(".block");

	blocks.forEach((block) => {
		block.addEventListener("mouseenter", () => {
			block.style.backgroundColor = generateBlockColor();
			darkenBlock(block);
		});
	});
}

function generateBlockColor() {
	const red = 255 * Math.random();
	const green = 255 * Math.random();
	const blue = 255 * Math.random();
	return "rgb(" + red + "," + green + "," + blue + ")";
}

function darkenBlock(block) {
	if (block.style.opacity < 1) {
		return (block.style.opacity = +block.style.opacity + 0.1);
	}
}
