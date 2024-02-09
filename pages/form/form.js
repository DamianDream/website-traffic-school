import './form.scss'

// Load main project scripts configuration
import appStart from '@js/appStart'
import { formSendEmail } from '@js/form/formSendEmail'
import { formSelect, getFormSelectData, createFormSelectNode } from '@js/form/formSelect'

document.addEventListener("DOMContentLoaded", () => {

    // Auto start scripts
    appStart()

	 // Form scripts

     // Form select item object config
    const selectFormElements = {
        "formSelect": {
            "label": "customSelect",
            "classes": {
                "select": "formSelect",
                "label": "form__label",
                "option": "formSelect__option-item",
            },
            "selectID": "formCustomSelect",
            "options": [
                { "value": "1", "text": "Option 1", },
                { "value": "2", "text": "Option 2", "selected": false },
                {"value": "3", "text": "Option 3", },
                { "value": "4", "text": "Option 4", },
            ]
        }
    }

     formSelect()
     createFormSelectNode('customSelectFormItem', selectFormElements)
     getFormSelectData("#formSelect")
	 formSendEmail('form')

     
})
