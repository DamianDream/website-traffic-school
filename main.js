// --- Load main project styles configuration
import "./style.scss";

// --- Load main project scripts configuration
import appStart from "@js/appStart";

// --- Load localization translate
import langSelect from "@js/localization/uLangMain.js";
import translate from "@js/localization/mainPage/language.json";

// --- Dialog / Popup
// import { initializePopUp } from '@js/notification/popup/popup';

//  --- Body Lock
import { toggleBodyLock } from "@js/utils/bodyLock";

//  --- Toggle
import { toggleHidenArea, closeNavigation } from "@js/utils/toggleHidenArea";
import { toggleForm } from "@js/utils/toggleForm";

// --- Form
import { formHandle } from "@js/form/formHandle";

// --- Load Animations
import { pageLoaderPercent } from '@js/animation/gsapFunctions.js';
import { addClassInViewObserver } from "@js/animation/addClassInViewObserver.js";

// --- Change page location
import { uNavigationScrollInToView } from '@js/utils/uScrollInToView'

document.addEventListener("DOMContentLoaded", () => {
	// --- Page loader animation
	pageLoaderPercent('.counter');

	// --- Auto start scripts
	appStart();

	// Activate language toggle script
	langSelect(translate);

	// Navigation Menu
	toggleHidenArea("primary-navigation", toggleBodyLock);

	// Contact Form Open & Close Action
	toggleForm();

	// Form Action on Submit
	formHandle("form");

	// Number animation
	addClassInViewObserver('.num-anim');

	// Navigation

	uNavigationScrollInToView('primary-nav', closeNavigation)

});
