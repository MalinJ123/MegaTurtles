
 

function isValidFullName(fullName) {

	const allowedChars = 'abcdefghijklmnopqrstuvwxyzåäö'
	for (let i = 0; i < fullName.length; i++) {
		let c = fullName.charAt(i).toLowerCase()
		if (!allowedChars.includes(c)) {
			return [false, 'Vänligen använd bara bokstäver.']
		}
	}

	return [true, '']
}