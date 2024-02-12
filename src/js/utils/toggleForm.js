export const toggleForm = () => {

	const formOpenBtn = document.getElementById("formOpenBtn");
	const formCloseBtn = document.getElementById("formCloseBtn");

    if (!formOpenBtn && !formCloseBtn) {
		console.log("Error, missing open or close form ID");
		return;
	}

	[formOpenBtn, formCloseBtn].forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();

			const view = document.querySelector("[form-view]");

			setTimeout(() => {
				const visibility = view.getAttribute("data-visible");
				// For example it can expect Body Lock function to prevent scroll beehive
                document.getElementsByTagName('body')[0].classList.toggle("lock")

				switch (visibility) {
					case "false":
						view.setAttribute("data-visible", true);
						formOpenBtn.setAttribute("aria-expanded", true);
						formCloseBtn.setAttribute("aria-expanded", true);
						break;
					case "true":
						view.setAttribute("data-visible", false);
                        formOpenBtn.setAttribute("aria-expanded", false);
						formCloseBtn.setAttribute("aria-expanded", false);
						break;
					default:
						console.error("Error, no such case to switch");
				}
			}, 300);
			// For example it can expect Body Lock function to prevent scroll beehive
		});
	});
};

export const forceFormControl = (action = false) => {

    const formOpenBtn = document.getElementById("formOpenBtn");
	const formCloseBtn = document.getElementById("formCloseBtn");
    const view = document.querySelector("[form-view]");

    view.setAttribute("data-visible", action);
    formOpenBtn.setAttribute("aria-expanded", action);
    formCloseBtn.setAttribute("aria-expanded", action);

    document.getElementsByTagName('body')[0].classList.toggle("lock")
}
