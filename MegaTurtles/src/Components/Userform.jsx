import { useState } from "react"
import '../Stylesheet/userForm.css'
import contactUs from '../assets/imgs/contactus.jpg'
import { isValidFullName, isValidTelephone, isValidMessage } from "../utils/vaildator.js";


function UserForm() {
	const [name, setName] = useState('');
	const [nameIsDirty, setNameIsDirty] = useState(false);
	const [tel, setTel] = useState('');
	const [telIsDirty, setTelIsDirty] = useState(false); 
	const [message, setMessage] = useState('')
	const [messageIsDirty, setMessageIsDirty] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('')
	//Tömmer inputfält när suddar ut
	const [isNameEmpty, setIsNameEmpty] = useState(false);
	const [isTelEmpty, setIsTelEmpty] = useState(false);
	const [isMessageEmpty, setIsMessageEmpty] = useState(false);  

//required - Glöm ej det

const [nameIsValid, nameErrorMessage ]= isValidFullName(name)
const [telIsvalid, teleErrorMessage] = isValidTelephone(tel)
const [textIsValid, textErrorMessage] = isValidMessage(message)

//Namn input
const handleNameChange = (e) => {
	setName(e.target.value)
	//setNameIsDirty(true);
} 
const formNameinput = nameIsDirty ? (nameIsValid ? 'valid' : 'invalid') : ''
const resetNameError = () => {
	setNameIsDirty(false); 
}

//Telefon input
const handleTelephoneChange = (e) => {
	setTel(e.target.value);
	setTelIsDirty(true);
} 
const formTelePhoneinput = telIsDirty ? (telIsvalid ? 'valid' : 'invalid') : ''
const resetTelError = () => {
	setTelIsDirty(false); 
}

//Message input
const handleMessageChange = (e) => {
	let input = e.target.value;
	setMessageIsDirty(true);
	console.log(e.target.value);
	if (input.length > 100 || input.length < 10) {
		setMessageIsDirty(true)
		console.log(input.length);
	} else {
		setMessageIsDirty(false)
	}
	setMessage(e.target.value)
}; 
const formMessageInput = messageIsDirty ? (textIsValid ? 'valid' : 'invalid') : ''
const resetMessageError = () => {
	setMessageIsDirty(false); 
}
//hanterar att sidan inte laddas om och när man trycker på button
const handleSubmit = event => {
	event.preventDefault()
	if(name.trim() === '') {
		setIsNameEmpty(true); 
		return; 
	}if (tel.trim() === '') {
		setIsTelEmpty(true);
		return;
	}if (message.trim() === '') {
		setIsMessageEmpty(true); 
		return;
	}

	//Rensar fältet när man trycker på knappen
	setName('');
	setTel('')
	setMessage('')
	setNameIsDirty(false)
	setTelIsDirty(false)
	setMessageIsDirty(false)
	setSubmitMessage('Tack för ditt meddelande! Vi återkommer med svar till dig!')
}

	return (
	<section className="contact">
		<form className="user-form" onSubmit={handleSubmit}>
				<p className="user-form-header">Har du ideér till en ny rätt eller vill fråga oss om något? Vänligen skriv till oss så kanske vi uppdaterar våran meny med just DIN mat</p>

				<div className="field-group">
				 <label className="name-input"> NAMN: </label>	
					<div className="field">
						<input className={formNameinput}
						type="text" 
						value={name} 
						onChange={handleNameChange}
						onBlur={() => setNameIsDirty(true)}
						onInput={resetNameError}
						/>
						<span>{nameIsDirty ? (nameIsValid ? '✔️' : '❌') : '' }</span>
					</div>
						<span className="display-error-message">{nameIsDirty ? nameErrorMessage : ''}</span>
				</div>

				 <div className="field-group">
					<label className="number-input">TELEFONNUMMER: </label>
						<div className="field">
							<input 
							className={formTelePhoneinput} 
							type="tel"
							placeholder="Ex. 070-123897" 
							value={tel} 
							onChange={handleTelephoneChange}
							onBlur={() => setTelIsDirty(true)}
							onInput={resetTelError}/>
							<span>{telIsDirty ? (telIsvalid ? '✔️' : '❌') : '' }</span>
						</div>
						<span className="display-error-phone-message">{telIsDirty ? teleErrorMessage : '' }</span>
				</div>	 

				<div className="field-group">
					<label className="message-container"> MEDDELANDE: </label>
						<textarea className="message-box" type="text" 
						value={message}
						onChange={handleMessageChange} 
						onInput={resetMessageError}
						rows="10" column="100"
						minlenght="10" maxlenght="100" 
						placeholder="Lämna meddelande till restaurangen">
						</textarea>
						<span className="display-error-text-message">{messageIsDirty ? textErrorMessage : '' }</span>
				</div>
			
				<button className="form-button">Skicka in!</button>
				{submitMessage && <p className="submit-meddelande">{submitMessage}</p>}
		</form>
		<div>
			<img className="contactUs" src={contactUs} />
		</div>
	</section>
	)
}

export default UserForm