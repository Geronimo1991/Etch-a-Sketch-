function generateBlocks(number) {
	const blockBorderSize = 1;
	const blockSize = 14;

	const container = document.querySelector(".container");
	const containerSize = number * (blockSize + blockBorderSize * 2);

	container.setAttribute(
		"style",
		"max-width:" + containerSize + "px; max-height:" + containerSize + "px;"
	);

	for (i = 0; i < number * number; i++) {
		let div = document.createElement("div");
		div.classList.add("block");
		div.setAttribute(
			"style",
			"width: " +
				blockSize +
				"px; height: " +
				blockSize +
				"px; border: " +
				blockBorderSize +
				"px solid black"
		);

		container.appendChild(div);
	}

	const blocks = document.querySelectorAll(".block");

	blocks.forEach((block) => {
		block.addEventListener("mouseenter", () => {
			block.classList.add("block-color");
		});
	});
}

generateBlocks(40);
