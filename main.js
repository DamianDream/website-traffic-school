// --- Load main project styles configuration
import "./style.scss";

// --- Load main project scripts configuration
import appStart from "@js/appStart";

// --- Load localization translate
import langSelect from "@js/localization/uLangMain.js";
import translate from "@js/localization/mainPage/language.json";

// --- Dialog / Popup
import A11yDialog from "a11y-dialog";

//  --- Body Lock
import { toggleBodyLock } from "@js/utils/bodyLock";

//  --- Toggle
import { toggleHidenArea, closeNavigation } from "@js/utils/toggleHidenArea";
import { toggleForm } from "@js/utils/toggleForm";

// --- Load Animations
import { pageLoaderPercent } from "@js/animation/gsapFunctions.js";
import { addClassInViewObserver } from "@js/animation/addClassInViewObserver.js";

// --- Change page location
import { uNavigationScrollInToView } from "@js/utils/uScrollInToView";

// FORM
// import { formHandle } from "@js/form/formHandle";
import { forceFormControl } from "@js/utils/toggleForm";
import { addError, removeError, nameTest, telegramTest } from "@js/form/validatFormData.js";
import { getAllFormDataObject } from "@js/form/getFormData.js";
// import { fetchTelegram } from "@js/notification/telegram/apiTelegram.js";

document.addEventListener("DOMContentLoaded", () => {
	// --- Page loader animation
	pageLoaderPercent('.counter');

	// --- Auto start scripts
	appStart();

	// Activate language toggle script
	langSelect(translate);

	// Navigation Menu
	toggleHidenArea("primary-navigation", toggleBodyLock);

	// Number animation
	addClassInViewObserver(".num-anim");

	// Navigation
	uNavigationScrollInToView("primary-nav", closeNavigation);

	// FORM ========================================================================================================================================================

	toggleForm(); // Contact Form Open & Close Action

	// Send form data to Telegram
	const sendFormDataToTelegram = async (formSelectodID) => {
		let error = false;

		// get form and check isUndefined
		const formNode = document.getElementById(formSelectodID);
		if (!formNode) {
			console.error("Form node was not found, selector");
			return;
		}
		// get Submit input or button
		const submitButton =  formNode.querySelector("[type='submit']");

		// Clear error on input change
		const formClearError = () => {
			const formReq = form.querySelectorAll("._req");
			if (!formReq) return;

			formReq.forEach((input) => {
				input.addEventListener("input", () => {
					removeError(input, "_error");
				});
			});
		};
		formClearError(); // call

		// ===== form validation functions config
		function validateForm(form) {
			let error = false;
			const formReq = form.querySelectorAll("._req");

			formReq.forEach((input) => {
				removeError(input, "_error");
				const inputValue = input.value.trim();

				// Switch case to validate inputs according [data-input=''] attribute in input element
				switch (input.dataset.input) {
					case "checkbox":
						if (!input.checked) {
							addError(input, "_error");
							input.nextElementSibling.classList.add("visually-hidden");
							error = true;
						}
						break;
					case "name":
						if (nameTest(inputValue)) {
							addError(input, "_error");
							error = true;
						}
						break;
					case "telegram":
						if (telegramTest(inputValue)) {
							addError(input, "_error");
							error = true;
						}
						break;
					default:
						if (input.value.length < 0) {
							addError(input, "_error");
							error = true;
						}
						break;
				}
			});
			return error;
		}

		// create Telegram URL with message
		const createUrlMessage = (obj) => {

			// const TELEGRAM_BOT_TOKEN = "6847166226:AAFKW003204cNl6FU5HKzLNMeZDHvsm9ViE";
			// const TELEGRAM_CHAT_ID = "-4101941938";

			// TEST
			const TELEGRAM_BOT_TOKEN = "6757503975:AAGffN9ewLabqx58b0Cf6SyJhnnusvK-ciY";
			const TELEGRAM_CHAT_ID = "-4105866056";

			let msg = "📣 TRAFFSCHOOL.COM 📣 New Message %0A";

			function capitalizeFirstLetter(string) {
				return string.charAt(0).toUpperCase() + string.slice(1);
			}

			if (obj) {
				Object.entries(obj).forEach((item) => {
					msg += `${capitalizeFirstLetter(item[0])}: ${item[1]} %0A`;
				});
			} else {
				msg = "Error! No data provided";
			}

			const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${msg}&parse_mode=html`;
			return url;
		};

		// Form Handler on Submit
		const formSendTelegramMessage = async (e) => {
			e.preventDefault();
			e.stopPropagation();
			submitButton.disabled = true;

			error = validateForm(formNode); // Check form inputs and return true / false
			if (error) {
				submitButton.disabled = false;
				return
			};

			// Dialog
			let dialogEl = document.getElementById("my-dialog");
			const dialog = new A11yDialog(dialogEl);
			// Add custom action on starting dialog
			dialog.on("show", function (event) {
				setTimeout(() => {
					forceFormControl(); // close form
					formNode.classList.remove("_sending"); // remove styling class
					formNode.reset(); // (i) form reset
				}, 1000);
			});

			formNode.classList.add("_sending"); // Add Loader
			const formData = getAllFormDataObject("#form"); // Get all form data

			// FETCH
			try {
				const response = await fetch(createUrlMessage(formData), { method: "GET" });
				if (response.ok) {
					document.querySelector(".popup_error").classList.add("_popup_hidden");
					document.querySelector(".popup_success").classList.remove("_popup_hidden");

					setTimeout(() => {
						if (dialogEl) dialog.show(); // If dialog is not undefined, show it
					}, 3000);
				} else {
					document.querySelector(".popup_error").classList.remove("_popup_hidden");
					document.querySelector(".popup_success").classList.add("_popup_hidden");

					setTimeout(() => {
						if (dialogEl) dialog.show(); // If dialog is not undefined, show it
					}, 3000);
				}

			} catch (error) {
				console.error("Failed to send form data to Telegram channel: ", error.message);
			} 
			submitButton.disabled = false;
		};

		// ===== Form SUBMIT Listener
		form.addEventListener("submit", formSendTelegramMessage);
	};

	sendFormDataToTelegram("form");
});
