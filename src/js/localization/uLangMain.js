
// FUnction expect file JSON with translation
const langSelect = (text) => {

    if  (!text) {
        console.error("Not found file with translate");
        return
    }

        // Check isTranslation Required 
        // if (currentLang === "ua") return

    const langControl = document.getElementById("language-toggle")

    // stop if node not exist
    if (!langControl) {
        console.error("Not found language control Node", langControl);
        return
    }
    
    const activeClass ="language-toggle__btn--active"
    const langButtons = document.querySelectorAll("[data-btn]")
    const allLangs = ["ru", "ua"]
    const defaultLang = "ua"
    let currentLang = localStorage.getItem("language") || defaultLang
    
    // Change language
    function changeLang() {
        for (const key in text) {
            let elem = document.querySelector(`[data-lang=${key}]`);
            if (elem) {
                elem.textContent = text[key][currentLang];
            }
        }
    }


    // Eventlistener for Lang select btns
    langControl.addEventListener("click", (e) => {
       if(e.target.dataset.btn && !e.target.classList.contains(activeClass)) {

        // Check is selected language not current
        if(e.target.dataset.btn !== currentLang) {
            handleLanguageSelect(e.target)
        }

        // translateForm(currentLang, translate.formTranslate)
       }
    })


    function handleLanguageSelect(el) {
        currentLang = el.dataset.btn
        addToLocalStorage("language", currentLang)
        resetActiveClass(langButtons, activeClass)
        el.classList.add(activeClass)
        changeLang()
    }

    function addToLocalStorage(key, data) {
        localStorage.setItem(key, data);
    }
    
    //  add current language by default to local storage
    if (!localStorage.getItem("language")) {
        addToLocalStorage("language", currentLang)
    }
    
    // Active class remove
    function resetActiveClass(arr, activeClass) {
        arr.forEach((elem) => {
            elem.classList.remove(activeClass);
        });
    }
    
    // Active class add
    function checkActiveLangButton() {
        try {
            document
            .querySelector(`[data-btn=${currentLang}]`)
            .classList.add(activeClass); 
        } catch (error) {
            console.error("checkActiveLangButton: ", error);
        }
    }

    checkActiveLangButton();

    // check is language already was selected in previous session or on another page
    if(localStorage.getItem("language") !== defaultLang) {
        changeLang()
    }

    //  translate form placeholders and value
    // function translateForm(lang, trans) {
    //     Object.entries(trans[`${lang}`]).forEach(item => {
    //         if (item[0] !== 'submit') {
    //             document.getElementsByName(`${item[0]}`)[0].placeholder=`${item[1]}`;
    //         } else {
    //             document.getElementsByName(`${item[0]}`)[0].value=`${item[1]}`;
    //         }
    //     })
    // }
}
    
export default langSelect;
