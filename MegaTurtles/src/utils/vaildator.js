function isValidFullName(fullName) {
	if (fullName.length < 5 ) {
		return [false, 'Minst 5 tecken tack.']; 
	}
	if (!fullName.includes(' ')) {
		return [false, 'Vänligen fyll i både för- och efternamn.']; 
	}
	const allowChars = ' abcdefghijklmnopqrstuvwxyzåäö'
	for(let i = 0; i < fullName.length; i++) {
		let c = fullName.charAt(i).toLowerCase()
		if(!allowChars.includes(c) ) {
			return [false, 'Vänligen använd bara bokstäver']; 
		}
	}
	return [true, '']; 
}

function isValidTelephone(fullPhoneNumber) {
	if(fullPhoneNumber.length < 10) {
		return [false, 'Minst 10 siffror tack.'];
	}
	const allowNumber = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9'
	for(let i = 0; i < fullPhoneNumber.length; i++) {
		let n = fullPhoneNumber.charAt(i)
		if(!allowNumber.includes(n) ) {
			return [false, 'Vänligen använd bara siffror'];
		}
	}
	return [true, '']
}

export { isValidFullName, isValidTelephone }