import {
    addError, 
    removeError
} from './validatFormData.js';
import { forceFormControl } from "@js/utils/toggleForm";

// demo: get form data
import { getAllFormDataObject } from './getFormData.js';

export const formHandle = (formId) => {
    // get the form node by id
    const form = document.getElementById(formId);

    // ===== form validation functions config
    function formValidate(form) {
        let error = false;

        const formReq = form.querySelectorAll('._req');

        formReq.forEach(input => {
            removeError(input, '_error');

            console.log(input);

            // Switch case to validate
            switch (input.dataset.input) {
                case 'checkbox':
                    if(!input.checked) {
                        addError(input, '_error') 
                        error = true;}
                    break;
                default:
                    if (input.value.trim().length < 2) {
                        addError(input, '_error')
                        error = true;
                    } 
                    break;
            }
        })
        return error
    }

    // ===== form SUBMIT Action
    form.addEventListener('submit', formSend);

    // form submit function
    async function formSend(e) {
        e.preventDefault();
        e.stopPropagation();

        // Close form
        // forceFormControl()

        // Form validation
        if(formValidate(e.target)) {
            console.error("Form validation failed");
            return
        }

        try {
            // Loader
            form.classList.add('_sending');

            // Create Form Data Object
            let formData = new FormData(form);

            //  DEMO Response
            const response = {ok: true};

            // Check the response status
            if (response.ok) {

                // ====== TEST DATA LOG
                const testData = getAllFormDataObject("#form");
                console.log(testData);

                // (i) form reset
                form.reset()
            } else {
                setTimeout(() => {
                    console.error("Error during send form data");
                }, 2000)
            }
        } catch (error) {
            // console.error(error);
        } finally {
            setTimeout(() => {
                form.classList.remove('_sending');
            }, 1000)
        }
    }
}
