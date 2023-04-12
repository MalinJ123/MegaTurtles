function isValidFullName(fullName) {
	if( fullName.length < 5 ) {
		return [false, 'Minst 5 tecken tack.']; 
	}
	if( !fullName.includes(' ') ) {
		return [false, 'Vänligen fyll i både för- och efternamn.']; 
	}

	//regex
	const allowChars = 'abcdefghijklmnopqrstuvwxyzåäö'
	for(i=0; i<fullName.length; i++) {
		let c = fullName.charAt(i).toLowerCase()
		if(!allowChars.includes(c) ) {
			return [false, 'Vänligen använd bara svenska bokstäver']; 
		}
	}
	return [true, '']; 
}

export { isValidFullName }