// Sample o HTML
{/* <div class="preload-cont">
	<div class=""><span class="num-preload">0</span>%</div>
	<div class="percents-wrp">
	<div style="width:0px" class="perc-bg"></div>
	</div>
</div> */}

// Usage:  animateValue(".num-preload", 0, 100, 1000);
export const animateValue = (node, start, end, duration ) => {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		node.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
};

// => Example of usage lto animate all numbers on page: 
// => Require "Animate" function

// let nums = document.querySelectorAll('.num-anim');
// setInterval(animate, 100);

// function animate() {
// 	nums.forEach((elem) => {
// 		console.log(elem, inViewport(elem));

// 		if (inViewport(elem)) {
// 			animateValue(elem, 0, 100, 1000);
// 			elem.classList.remove('num-anim');
// 			nums = document.querySelectorAll('.num-anim');
// 		}
// 	});
// }
