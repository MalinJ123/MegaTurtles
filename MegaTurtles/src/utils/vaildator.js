
//Funktionen för namn-input
function isValidFullName(fullName) {
	if (fullName.length < 6 ) {
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
//Funktionen för telefon-input
function isValidTelephone(fullPhoneNumber) {
	if(fullPhoneNumber.length < 10) {
		return [false, 'Minst 10 siffror tack.'];
	}
	const allowNum = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9'
	for(let i = 0; i < fullPhoneNumber.length; i++) {
		let n = fullPhoneNumber.charAt(i)
		if(!allowNum.includes(n) ) {
			return [false, 'Vänligen använd bara siffror'];
		}
	}
	return [true, '']
}
//Funktionen för text-rutan
function isValidMessage(fullMessage) {
	if(fullMessage.length < 101) {
		return [false, 'Minst 10 och max 100 tecken tack.'];
	}
	const allowSymbol = '0123456789abcdefghijklmnopqristuvwxyzåäö?!,.'
	for(let i = 0; i < fullMessage.length; i++ ) {
		let s = fullMessage.charAt(i)
		if(!allowSymbol.includes(s) ) {
			return [false, 'Vänligen använd bara bokstäver och siffor']
		}
	}
	return [true, '']
}

export { isValidFullName, isValidTelephone, isValidMessage}