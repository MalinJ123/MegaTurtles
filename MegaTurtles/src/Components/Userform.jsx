import { useState } from "react"
import '../Stylesheet/userForm.css'
import contactUs from '../assets/imgs/contactus.jpg'

function UserForm() {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [message, setMessage] = useState('')

	return (
		<section className="contact">
		<form className="user-form">
				<p className="user-form-header">Har du ideér till en ny rätt eller vill fråga oss om något? Vänligen skriv till oss så kanske vi uppdaterar våran meny med just DIN mat</p>
				<label className="name-input"> NAMN: <br />
					<input className="form-input "type="text" value={name} onChange={(e) => setName(e.target.value)}
					/>
				</label>

				<label className="number-input">TELEFONNUMMER: <br />
					<input className="form-input">
					</input>
				</label>
				
				<label className="message-container">
				MEDDELANDE: <br />
					<textarea className="message-box" type="text" rows="10" column="100"
					minlenght="10" maxlenght="100" placeholder="Lämna meddelande till restaurangen"></textarea>
				</label>
				<button className="form-button" type="submit">Skicka in!</button>
		</form>
		<div>
		<img className="contactUs" src={contactUs} />
		</div>
	</section>
	)
}

export default UserForm