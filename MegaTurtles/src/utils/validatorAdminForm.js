//Funktioner för admin för att lägga till nya maträtter 

//namet på maten på adminpage 
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
//matbeskrivning i adminpage 
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
//url på adminpage 
function isValidUrl(fullUrl) {
	if(fullUrl.length < 7) {
		return [false, 'Vänligen fyll i adressen med 7 bokstäver'];
	}
	const allowSymbolUrl = '0123456789abcdefghijklmnopqristuvwxyzåäö?!,.& =/_:'
	for(let i = 0; i < fullUrl.length; i++ ) {
		let s = fullUrl.charAt(i)
		if(!allowSymbolUrl.includes(s) ) {
			console.log('Isvalid url: ' + s)
			return [false, 'Vänlig använd giltiga tecken tack!']
		}
	}
	return [true, '']
}

//priset i Adminpage 
function isValidPrice(fullPrice) {
	if(fullPrice.length < 3) {
		return [false, 'Vänligen fyll i matpriset med minst 2 siffrigt']; 
	}
	const allowNumberPrice = '0123456789'
	for(let i=0; i < fullPrice.length; i++) {
		let r = fullPrice.charAt(i) 
		if(!allowNumberPrice.includes(r) ) {
			console.log('Isvalid price: ' + r)
			return [false, 'Vänligen använd siffor tack']
		}
	}
	return [true, '']
}



export { isValidFoodName , isValidFoodDescription, isValidUrl, isValidPrice }