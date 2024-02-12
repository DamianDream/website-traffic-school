export const toggleHidenArea = (selectorID, func) => {
	const navigationNode = document.getElementById(selectorID);
	const toggleBtn = document.querySelector("[navigation-toggle]");

	toggleBtn.addEventListener("click", (e) => {
		const view = navigationNode.querySelector("[navigation-view]");
		// const toggleBtn = document.querySelector("[navigation-toggle]");
		const toggleIcon = document.querySelector("[navigation-toggle-icon]");

		console.log(e.target);

		// if (e.target === toggleBtn || e.target === toggleIcon) {
			// add active class to hamburger node
			toggleIcon.classList.toggle("is-active");
			toggleBtn.classList.toggle("is-active");

			// For example it can expect Body Lock function to prevent scroll beehive
			if (func) func();

			const visibility = view.getAttribute("data-visible");

			switch (visibility) {
				case "false":
					view.setAttribute("data-visible", true);
					toggleBtn.setAttribute("aria-expanded", true);
					break;
				case "true":
					view.setAttribute("data-visible", false);
					toggleBtn.setAttribute("aria-expanded", false);
					break;
				default:
					console.error("Error, no such case to switch");
			}
		// }
	});
};

export const closeNavigation = () => {
	const view = document.querySelector("[navigation-view]");
	const toggleBtn = document.querySelector("[navigation-toggle]");
	const toggleIcon = document.querySelector("[navigation-toggle-icon]");

	toggleIcon.classList.toggle("is-active");
	toggleBtn.classList.toggle("is-active");

	view.setAttribute("data-visible", false);
	toggleBtn.setAttribute("aria-expanded", false);
	toggleIcon.setAttribute("aria-expanded", false);

	document.getElementsByTagName("body")[0].classList.toggle("lock");
};
