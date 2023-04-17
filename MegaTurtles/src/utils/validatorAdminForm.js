//Funktioner för admin för att lägga till nya maträtter 

function isValidFoodName(fullFoodName) {
	if (fullFoodName.length < 3 ) {
		return [false, 'Minst 3 tecken tack.']; 
	}
	const allowChars = ' -´abcdefghijklmnopqrstuvwxyzåäö'
	for(let i = 0; i < fullFoodName.length; i++) {
		let c = fullFoodName.charAt(i).toLowerCase()
		if(!allowChars.includes(c) ) {
			return [false, 'Vänligen använd bara bokstäver']; 
		}
	}
	return [true, '']; 
}

function isValidFoodDescription(fullFoodDescription) {
	if(fullFoodDescription.length < 101) {
		return [false, 'Minst 10 och max 100 tecken tack.'];
	}
	const allowSymbol = ' 0123456789abcdefghijklmnopqristuvwxyzåäö?!,. '
	for(let i = 0; i < fullFoodDescription.length; i++ ) {
		let s = fullFoodDescription.charAt(i)
		if(!allowSymbol.includes(s) ) {
			return [false, 'Vänligen använd bara bokstäver och siffor']
		}
	}
	return [true, '']
}

function isValidUrl(fullUrl) {
	if(fullUrl.length < 7) {
		return [false, 'Vänligen fyll i adressen till bilden med minst 7 bokstäver'];
	}
	const allowSymbolUrl = '0123456789abcdefghijklmnopqristuvwxyzåäö?!,.& =/ /_'
	for(let i = 0; i < fullUrl.length; i++ ) {
		let s = fullUrl.charAt(i)
		if(!allowSymbolUrl.includes(s) ) {
			return [false, 'Vänlig använd giltiga tecken tack!']
		}
	}
	return [true, '']
}



export { isValidFoodName , isValidFoodDescription, isValidUrl }