import { useState } from "react"
import '../Stylesheet/userForm.css'
import contactUs from '../assets/imgs/contactus.jpg'
import { isValidFullName, isValidTelephone } from "../utils/vaildator.js";



function UserForm() {
	const [name, setName] = useState('');
	const [nameIsDirty, setNameIsDirty] = useState(false);
	const [tel, setTel] = useState('');
	const [telIsDirty, setTelIsDirty] = useState(false); 
	const [message, setMessage] = useState('')

//required - Glöm ej det
//min max - telefonnummer type: tel

const [nameIsValid, nameErrorMessage ]= isValidFullName(name)
const [telIsvalid, teleErrorMessage] = isValidTelephone(tel)

//Namn input
const handleNameChange = (e) => setName(e.target.value)
const formNameinput = nameIsDirty ? (nameIsValid ? 'valid' : 'invalid') : ''

//Telefon input
const handleTelephoneChange = (e) => setTel(e.target.value);

const handleSubmit = event => {
	event.preventDefault()
}

	return (
	<section className="contact">
		<form className="user-form">
				<p className="user-form-header">Har du ideér till en ny rätt eller vill fråga oss om något? Vänligen skriv till oss så kanske vi uppdaterar våran meny med just DIN mat</p>

				<div className="field-group">
				 <label className="name-input"> NAMN: </label>	
					<div className="field">
						<input className={formNameinput}
						type="text" 
						value={name} 
						onChange={handleNameChange}
						onBlur={() => setNameIsDirty(true)}
						/>
						<span>{nameIsDirty ? (nameIsValid ? '✔️' : '❌') : '' }</span>
					</div>
						<span className="display-error-message">{nameIsDirty ? nameErrorMessage : ''}</span>
				</div>

				<div className="field-group">
					<label className="number-input">TELEFONNUMMER: </label>
						<div className="field">
							<input 
							className="form-input" 
							type="tel" 
							value={tel} 
							onChange={handleTelephoneChange}
							onBlur={() => setTelIsDirty(true)}/>	
						</div>
				</div>	

				<div className="field-group">
					<label className="message-container"> MEDDELANDE: </label>
						<textarea className="message-box" type="text" 
						value={message}
						onChange={(e) => setMessage(e.target.value)} 
						rows="10" column="100"
						minlenght="10" maxlenght="100" placeholder="Lämna meddelande till restaurangen"></textarea>
				</div>
			
				<button className="form-button" type="submit" onClick={handleSubmit}>Skicka in!</button>
		</form>
		<div>
			<img className="contactUs" src={contactUs} />
		</div>
	</section>
	)
}

export default UserForm