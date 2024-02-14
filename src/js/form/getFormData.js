// Function return object with form data

export const getAllFormDataObject = (formSelectorID) => {
    const data = {}

    try {
        //  Select form node
        const form = document.querySelector(formSelectorID);
        const formData = new FormData(form)

        // Iterate via form object
        for(let [key, value] of formData) {
            if(value !== '') {
                if(key === 'agreement') {
                    // data[key] = value === "on"
                } else if(key === 'telegram') {

                    if(value.trim() !== "") {

                        if (value.charAt(0) !== '@') {
                            value = '@' + value;
                        }

                        data[key] =  value
                    }

                } else {
                    data[key] = (typeof value === "string") ? value.trim() : value
                }
            }
        }
    } catch (error) {
        console.error(`Error during iterate (selector: ${formSelectorID}) object: `, error);
    }

    return data
}
