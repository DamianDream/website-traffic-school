// Link: https://gsap.com/docs/v3/Installation/

console.log('gsap loadeded');

import { gsap } from 'gsap';

// import { CustomEase } from "gsap/CustomEase";
// import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Observer } from "gsap/Observer";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { PixiPlugin } from "gsap/PixiPlugin";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(
	//     Flip,
	// ScrollTrigger
	//     Observer,
	//     ScrollToPlugin,
	//     Draggable,
	//     MotionPathPlugin,
	//     EaselPlugin,
	//     PixiPlugin,
	//     TextPlugin,
	//     RoughEase,
	//     ExpoScaleEase,
	//     SlowMo,
	//     CustomEase
// );

// Require import : gsap
export const pageLoaderPercent = (selector) => {
	let counterElement = document.querySelector(selector);

	if (!counterElement) {
		console.error('No element found with selector: ' + selector);
		return;
	}

	let currentValue = 0;

	function updateCounter() {
		if (currentValue === 100) {
			return;
		}
		currentValue += Math.floor(Math.random() * 10) + 1;
		if (currentValue > 100) {
			currentValue = 100;
		}
		counterElement.textContent = currentValue + '%';

		let delay = Math.floor(Math.random() * 200) + 50;
		setTimeout(updateCounter, delay);
	}
	updateCounter();

	gsap.to('.counter', 0.25, {
		delay: 3.5,
		opacity: 0,
	});
	gsap.to('.bar', 1.5, {
		delay: 3.5,
		opacity: 0,
		stagger: {
			amount: 0.5,
		},
		ease: 'power4.inOut',
	});
};

function createScrollTrigger(triggerElement, timeline) {
	ScrollTrigger.create({
		trigger: triggerElement,
		start: 'top bottom',
		onLeaveBack: () => {
			timeline.progress(0);
			timeline.pause();
		},
	});
	ScrollTrigger.create({
		trigger: triggerElement,
		start: 'top 60%',
		onEnter: () => timeline.play(),
	});
}
