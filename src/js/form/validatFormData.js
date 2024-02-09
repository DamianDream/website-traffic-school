export const emailTest =( email ) => {
	// console.log("emailTest", email); // => log
	const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
	return regex.test( email );
}

// export const telegramTest = ( selector = 'input[id="telegram"]') => {
// 	const input = document.querySelector(selector)
// 	console.log("telegramTest", input); // => log
	
// 	if (!input) {
// 		console.error("Failed test telegram input", selector)
// 		return false
// 	}
	
// 	const value = input.value
// 	value = value.replace(/[^A-Za-z0-9_@а-яА-ЯёЁіІїЇєЄ]/g, '');

// 	if (value.charAt(0) !== '@') {
// 		value = '@' + value;
// 	  }

// 	// We limit the input only to letters, numbers and the underscore character after the dog
//     let atIndex = value.indexOf('@');
//     if (atIndex !== -1) {
//       let nickname = value.substring(atIndex + 1);
//       nickname = nickname.replace(/[^A-Za-z0-9_а-яА-ЯёЁіІїЇєЄ]/g, '');
//       value = value.substring(0, atIndex + 1) + nickname;
//     }

// 	 // update value
// 	 input.val(value);

// 	 // Update placeholder
// 	 if (value.trim().length === 0) {
// 		input.attr('placeholder', '@telegram_nickname');
// 	 }
// }

// export const telegramDeleteValue = (selector = 'input[id="telegram"]') => {
// 	document.querySelector(selector).addEventListener('keydown', function(e) {
// 		let keyCode = e.keyCode || e.which;

// 		// We delete the dog along with the contents of the field when using the key "Delete" || "Backspace"
// 		if (keyCode === 8 || keyCode === 46) {
// 			var input = $(this);
// 			var value = input.val();
	
// 			if (value.charAt(0) === '@') {
// 			value = value.substring(1);
// 			}
	
// 			input.val(value);
// 		}
// 	})
// }

// File Input Image Validation ========================================================================================================================================================

export const fileTypeCheck = (file) => {
	let check = false

	if (!file) {
		console.error("Error: File missing");
		return check
	}

	const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
	if (allowedTypes.includes(file.type)) {
		check = true
	} else {
		console.error("File type is not allowed")
	}
	return check
}

export const fileSizeCheck = (file, maxSize = 2) => {
	let check = false
	if (!file) {
		console.error("Error: File missing");
		return check
	}
	// By default2 Mb file size allowed
	const allowedSize = 1024 * 1024 * maxSize; 
	const errMsg = `File size should be less than ${maxSize} Mb`

	if(file.size > allowedSize) {
		console.error(errMsg)
	} else {
		check =  true
	}
	return check
}

// upload image file check
//  Function expect object with: file, input, test functions as Array
// {
//     file: imageInput.files[0],
//     input: imageInput,
//     testFunctions: [
//         fileTypeCheck,
//         fileSizeCheck
//     ]
// }
export const uploadImageFileCheck = (testConfigObject) => {
	let check = false

	// checks test
	try {
		const { file, input, ...test} = testConfigObject
		if (!file || !input) {
			console.error("File check error: File or Input missing");
			return check
		}   

		test.testFunctions.forEach(test => check = test(file))

		if(!check) {
			console.error("File check: Failed!");
			input.value = ""
			return check
		} 
	} catch (error) {
		console.error("File check: ", error);
	}   

	return check
}

// Create image file preview and inject in to HTML Preview Node========================================================================================================================================================
export const createImagePreview = (previewNodeSelector, image) => {
	if (!previewNodeSelector) {
		console.error("Error: Preview node selector not provided");
		return
	}
	const imagePreviewNode = form.querySelector(previewNodeSelector);

	try {
		const reader = new FileReader();
		reader.onload = function(e) {
			imagePreviewNode.innerHTML = `<image src="${e.target.result}" alt="Preview image"/>`;
		}
		reader.onerror = function(e) {
			alert("No render image")
		}
		reader.readAsDataURL(image);
	} catch (error) {
		console.error("Failed read and create image preview");
	}
}

// Add & Remove Error Class ========================================================================================================================================================

export const addError = (input, className) => {
	input.parentElement.classList.add(className)
	input.classList.add(className)
}
export const  removeError = (input, className) => {
	input.parentElement.classList.remove(className)
	input.classList.remove(className)
}
