import {
    emailTest, 
    addError, 
    removeError,
    fileTypeCheck,
    fileSizeCheck,
    uploadImageFileCheck,
    createImagePreview
} from './validatFormData.js';

// demo: get form data
import { getAllFormDataObject } from './getFormData';

export const formSendEmail = (formId) => {

    // get the form node by id
    const form = document.getElementById(formId);

    // ===== form validation functions config
    function formValidate(form) {
        let error = false;

        const formReq = form.querySelectorAll('._req');

        formReq.forEach(input => {
            removeError(input, '_error');

            // Switch case to validate
            switch (input.dataset.input) {
                case 'email':
                    if(!emailTest(input.value)) {
                        addError(input, '_error')
                        error = true;} 
                    break;
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

    // ===== form image input check and preview
    // (i) in case of success submit and send email preview should be removed 
    const formImagePreview = (formID, inputID, previewID) => {
        // get the form node by id
       const form = document.getElementById(formID);
       // check provided form node 
       if  (!form) {
           console.error("Form node was not selected")
           return
       }

       const imageInput = form.querySelector(inputID);
       const ImagePreview = form.querySelector(previewID);

       // check input node selected and correct type
       if (imageInput.type !== "file") {
           console.error("Form image input is not a file input type")
           return
       } 
       //  check is preview node selected
       if (!ImagePreview) {
           console.error("Form image preview not selected")
           return
       }

       // Add Event Listener to the input file
       imageInput.addEventListener('change', (e) => {
           const imageFile = imageInput.files[0]

           const check = uploadImageFileCheck({
               file: imageFile,
               input: imageInput,
               testFunctions: [
                   fileTypeCheck,
                   fileSizeCheck
               ]
           })
           
           if (check) {
               // create HTML node inside preview node with onload file
               createImagePreview(previewID, imageFile)
               return imageFile
           }
       })
   }
   formImagePreview(formId, '#formImage', '#formPreview')

    // ===== form SUBMIT Action
    form.addEventListener('submit', formSend);

    // form submit function
    async function formSend(e) {
        e.preventDefault();
        e.stopPropagation();

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

            const image =  document.querySelector('#formImage').files[0];
            // formData.append("image", image)

            // Send form data to server
            // const response = await fetch('https://formsubmit.co/damiandream@gmail.com', {
            //     method: 'POST',
            //     body: formData
            // });

            //  DEMO Response
            const response = {ok: true};

            // Check the response status
            if (response.ok) {

                // ====== TEST DATA LOG
                const testData = getAllFormDataObject("#form");
                console.log(testData);

                const res = await response.json();
                console.log("Email sent successfully: ", res.message);
                
                // (i) remove preview image node
                form.querySelector('#formPreview').innerHTML = '';
                // (i) form reset
                form.reset()
            } else {
                setTimeout(() => {
                    alert("Error during send email");
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
