// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=John; expires=" + date;

// document.cookie = "language=ua; path=/; domain=traffschool.com; expires=Tue,";
// alert( document.cookie );

// --- SET COOKIE ---
export const setCookie = (cName, cValue, exDays) => {
	const d = new Date();
	d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
};

// --- GET COOKIE ---
export const getCookie = (cName) => {
	let name = cName + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

// --- CHECK COOKIE ---
export const checkCookie = (cValue) => {
	let value = getCookie(cValue);
	if (value != "") {
		return true
	} else {
		return false
	}
}

// --- CHECK & SET COOKIE IF NOT EXIST ---
export const checkSetCookie = (cValue) => {
	let value = getCookie(cValue);
	if (value != "") {
        console.log(`Cookie: ${cValue}, exist! `, value);
		return true
	} else {
        if (value != "" && value != null) {
			setCookie(cValue, value, 365);
		}
		return false
	}
}
