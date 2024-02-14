/* Configuration OPTIONS and Usage sample 

    import pageLanguageHandle from "@js/localization/uLangPage.js";
    import translate from "@js/localization/privacy-policy/privacyPolicy.json";

    const pageLanguageOptions = {
        translation: translate,
        defaultLang: "ua",
    }

    pageLanguageHandle(pageLanguageOptions);

*/

const pageLanguageHandle = (options) => {

    if (!options) {
        console.error("Not found options for pageLanguageHandle");
        return
    }

    const { translation:text, defaultLang } = options;

    /* Check is Language set in local storage, if not ADD default 
    lang to local storage and set current language */

    let currentLanguage = localStorage.getItem("language") || defaultLang;

    // If language not default, change language
    if (currentLanguage === defaultLang) return

    // Change language
    function changeLang() {
        for (const key in text) {
            let elem = document.querySelector(`[data-lang=${key}]`);
            if (elem) elem.innerHTML = text[key][currentLanguage];
        }
    }
    
    // Start function to change language
    try {
        changeLang();
    } catch (error) {
        console.error("Failed to translate page", error);
        return
    }
}

export default pageLanguageHandle
