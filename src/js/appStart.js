import { fixPageTransition } from '@js/utils/fixPageTransition.js'
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

    } catch (error) {
        console.error("Fail to load appStart", error);
    }
}

export default appStart;
