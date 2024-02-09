export const formSelect = () => {
    console.log("Form Select");
};

// Get form select data =============================================================================================================================================================================
export const getFormSelectData = (selectorID) => {
    const selectNode = document.querySelector(selectorID)
    
    selectNode.addEventListener('change', function() { 
            const value = this.value;
            console.log(value);
            return this.value; 
        });
        
    // ============= Advance Select Options
    // Action onChange
    // selectNode.onchange = function() {
    //         // Get option index
    //         const index = this.selectedIndex
    //         // console.log(index);
        
    //         // Get option text
    //         const option = this.options[index].text
    //         // console.log(option);
    
    //     }
}

// CREATE SELECT NODE ============================================================================================================================================================================

// => CONFIG OBJECT SAMPLE

// const selectFormElements = {
//     "formSelect": {
//         "label": "customSelect",
//         "classes": {
//             "label": "form__label",
//             "select": "formSelect",
//             "option": "formSelect__option-item",
//         },
//         "selectID": "formCustomSelect",
//         "options": [
//             { "value": "1", "text": "Option 1", },
//             { "value": "2", "text": "Option 2", "selected": false },
//             {"value": "3", "text": "Option 3", },
//             { "value": "4", "text": "Option 4", },
//         ]
//     }
// }

// Expect: parent Node id, CONFIG (Sample above)
export const createFormSelectNode = (parentNodeID, selectDataObject) => {
    const parentNode = document.getElementById(parentNodeID)

    // Create selectNode
    const select = document.createElement('select')

    // spread data from options
    const { label, classes, selectID, options } = selectDataObject.formSelect;

    // SELECT
    if (classes?.select) {
        select.classList.add(classes.select)
    }
    select.id = selectID

    // LABEL
    if(label !== "") {
        const labelNode = document.createElement('label')
        // add class if exist
        if (classes?.label) {
            labelNode.classList.add(classes.label)
        }
        labelNode.htmlFor = selectID // require unique ID
        labelNode.textContent = label
        // parentNode.appendChild(labelNode)
    }

    // OPTION
    options.forEach(item => {
        const option = document.createElement('option')
        option.value = item.value
        option.textContent = item.text

        if (classes?.option) {
            option.classList.add(classes.option)
        }

        if(item?.selected) {
            option.selected = true
        }

        select.append(option)
    });

    parentNode.append(select);
}
