// --- Load main project styles configuration
import './style.scss';

// --- Load main project scripts configuration
import appStart from '@js/appStart';

// --- Dialog / Popup
// import { initializePopUp } from '@js/notification/popup/popup';

//  --- Toggle Navigation
import { hamburgerToggle } from '@js/utils/hamburgerToggle';

// --- Load Animations
// import { pageLoaderPercent } from '@js/animation/gsapFunctions.js';
// import { animateValue } from '@js/animation/animateValues.js';
import { addClassInViewObserver } from '@js/animation/addClassInViewObserver.js';
import { inViewport } from '@js/animation/inViewport.js';

import SplitType from 'split-type';

document.addEventListener('DOMContentLoaded', () => {
	// --- Page loader animation
	// pageLoaderPercent('.counter');

	// --- Auto start scripts
	appStart();

	// Navigation
	hamburgerToggle('primary-navigation');

});
