import translate from '../../localization/lang/language.json';

export function inputsValidation() {
	let currLang = localStorage.getItem("language")
	let errorText = translate.formTranslateError[currLang]

	    // Form inputs validation check
		const  inputs = document.querySelectorAll(['input[name="name"]', 'input[name="phone"]', 'input[name="telegram"]']);
		
		[...inputs].forEach(input => {
			input.addEventListener('input', function(e) {
				input.setCustomValidity('')

				input.classList.remove("valid")
				
				if(e.target.value !== '' ) {

					if(input.checkValidity()) {
						input.classList.add("valid")
					}
					if(e.target.value && !input.checkValidity()) {
						input.classList.remove("valid")
					
						currLang = localStorage.getItem("language")
						errorText = translate.formTranslateError[currLang]
						input.setCustomValidity(errorText[`${input.name}`])
					}

					}
			})
		})
}
