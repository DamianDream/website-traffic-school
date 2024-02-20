export const emailTest = (email) => {
	// console.log("emailTest", email); // => log
	const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
	return regex.test(email);
};

// Phone ========================================================================================================================================================

export const phoneTest = (phone) => {
	// console.log("emailTest", email); // => log
	const regex = /^[0-9\-\+]{5,24}$/;
	return !regex.test(phone);
};

// Telegram========================================================================================================================================================

export const telegramTest = (value) => {
	let error = false;

	if (value.trim() === "") {
		// console.error("Telegram ID must be filled out");
		return
	} else if (value.length > 36) {
		console.error("Telegram ID cannot be more than 36 characters");
		error = true;
	} else if (value.length < 4) {
		console.error("Telegram ID cannot be less than 4 characters");
		error = true;
	} else if (/[^A-Za-z0-9_@а-яА-ЯёЁіІїЇєЄ]/g.test(value)) {
		console.error("Telegram ID can only contain alphanumeric, number and symbols @, -, _");
		error = true;
	}
	return error;
}

//========================================================================================================================================================
export const nameTest = (name) => {
	let error = false;

	if (name == "") {
		console.error("Family name must be filled out");
		error = true;
	} else if (name.length > 35) {
		console.error("Name cannot be more than 35 characters");
		error = true;
	} else if (name.length < 2) {
		console.error("Name cannot be more than 35 characters");
		error = true;
	} 
	else if (/[^А-Яа-яA-Za-z ]/.test(name)) {
		console.error("Family name can only contain alphanumeric characters and spaces");
		error = true;
	}
	return error;
};

// File Input Image Validation ========================================================================================================================================================

export const fileTypeCheck = (file) => {
	let check = false;

	if (!file) {
		console.error("Error: File missing");
		return check;
	}

	const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
	if (allowedTypes.includes(file.type)) {
		check = true;
	} else {
		console.error("File type is not allowed");
	}
	return check;
};

export const fileSizeCheck = (file, maxSize = 2) => {
	let check = false;
	if (!file) {
		console.error("Error: File missing");
		return check;
	}
	// By default2 Mb file size allowed
	const allowedSize = 1024 * 1024 * maxSize;
	const errMsg = `File size should be less than ${maxSize} Mb`;

	if (file.size > allowedSize) {
		console.error(errMsg);
	} else {
		check = true;
	}
	return check;
};

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
	let check = false;

	// checks test
	try {
		const { file, input, ...test } = testConfigObject;
		if (!file || !input) {
			console.error("File check error: File or Input missing");
			return check;
		}

		test.testFunctions.forEach((test) => (check = test(file)));

		if (!check) {
			console.error("File check: Failed!");
			input.value = "";
			return check;
		}
	} catch (error) {
		console.error("File check: ", error);
	}

	return check;
};

// Create image file preview and inject in to HTML Preview Node========================================================================================================================================================
export const createImagePreview = (previewNodeSelector, image) => {
	if (!previewNodeSelector) {
		console.error("Error: Preview node selector not provided");
		return;
	}
	const imagePreviewNode = form.querySelector(previewNodeSelector);

	try {
		const reader = new FileReader();
		reader.onload = function (e) {
			imagePreviewNode.innerHTML = `<image src="${e.target.result}" alt="Preview image"/>`;
		};
		reader.onerror = function (e) {
			alert("No render image");
		};
		reader.readAsDataURL(image);
	} catch (error) {
		console.error("Failed read and create image preview");
	}
};

// Add & Remove Error Class ========================================================================================================================================================

export const addError = (input, className) => {
	input.parentElement.classList.add(className);
	input.classList.add(className);
	input.nextElementSibling.classList.add(className);
};
export const removeError = (input, className) => {
	input.parentElement.classList.remove(className);
	input.classList.remove(className);
	input.nextElementSibling.classList.remove(className);
};
