import { fixPageTransition } from '@js/utils/fixPageTransition.js'
import langSelect from '@js/localization/uLangMain.js'
import { autoStartModules } from '@js/autoStartScripts/uAutoStartScriptFiles.js'

const appStart = () => {
    try {
        
        // Fix default transition brevier on page loading
        fixPageTransition()

        /*
        (i) Default project starting scripts
        *Scripts: 
            Update Copyright date,
            Stop Animation while window resize
        */ 
        autoStartModules()
        
        // Activate language toggle script
        langSelect()

    } catch (error) {
        console.error("Fail to load appStart", error);
    }
}

export default appStart;
