import { archiveWays } from "./archiveSoundWays.js";

const btn = document.querySelectorAll("button");
const audio = document.querySelector("audio");

btn.forEach((button, index) => {
	button.addEventListener("click", () => {
		pausePLay(archiveWays[index]);
	});
});

function pausePLay(value) {
	audio.src = value;
	audio.pause();
	audio.play();
}
