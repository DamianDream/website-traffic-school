import './publicOffer.scss'

// --- Load localization translate
import pageLanguageHandle from "@js/localization/uLangPage.js";
import translate from "@js/localization/public-offer/publicOffer.json";

// --- Load main project scripts configuration
import appStart from "@js/appStart";

document.addEventListener("DOMContentLoaded", () => {

    // Auto start scripts
    appStart()

    // ---localization translate
    const pageLanguageOptions = {
        translation: translate,
        defaultLang: "ua",
    }

    // Activate language toggle script
    pageLanguageHandle(pageLanguageOptions);
    
})
