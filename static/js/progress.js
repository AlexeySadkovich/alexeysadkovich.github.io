const circle        = document.querySelector(".progress-ring__circle");
const circleFE      = document.querySelector("#circleFE");
const circleJS      = document.querySelector("#circleJS");
const circleGO      = document.querySelector("#circleGO");
const circlePY      = document.querySelector("#circlePY");

const radius        = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

const setProgress = (circ, percent) => {
	circ.style.strokeDasharray  = `${circumference} ${circumference}`;
	circ.style.strokeDashoffset = circumference;

	const offset = circumference - percent / 100 * circumference;
	circ.style.strokeDashoffset = offset;
};
