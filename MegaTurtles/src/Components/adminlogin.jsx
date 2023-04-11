import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


const AdminLogin = (props) => {
	const [close, setClose] = useState(false)
	const [password, setPassword] = useState('')
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false)
	const [showAdminPage, setShowAdminPage] = useState(false)
	const correctPassword = 'Mums'

	const LoginEvents = (event)=> {
		event.preventDefault()
		setHasSubmitted(true)

		if (password === correctPassword) {
			setIsPasswordCorrect(true)
			setShowAdminPage(true)
		} else {
			setIsPasswordCorrect(false)
		}
		
	}

	// Nu vill jag skapa en funktion där jag skickas vidare till adminsidan som ska ligga i funktionen LoginEvent. Jag tror att jag ska börja med att skapa en statevariabel för att visa den sidan.

	const handleInputChange = (event) => {
		setPassword(event.target.value)
		if (hasSubmitted) {
			setIsPasswordCorrect(event.target.value === correctPassword)
		} 
	}

	const closeLogin = () => {
		setClose(!close)
		props.onClose();
	} 

	


	
	return (
		<section className="overlay" style={{ display: close ? 'none' : 'fixed' }}>
			<form className="form-container">
				<FontAwesomeIcon onClick={closeLogin} className= 'close-icon-admin' icon={faXmark} />
				
				<h2 className="login">Logga in</h2>
				<label className='label-style'>Avändarnamn: </label>
				<input 
					className="input" 
					type= "text" 
					placeholder= "Admin">
				</input>

				<label className='label-style'>Lösenord:</label>
				<input 
					className="input" 
					type= "password" 
					placeholder= "Lösenord"
					value={password}
					onChange={handleInputChange}>
				</input>
					{hasSubmitted && !isPasswordCorrect && password !== '' && <p className='error-message'>Fel lösenord</p> }

				<button 
					type="submit" 
					onClick={LoginEvents}> Logga in
				</button>

			</form>
		</section>
	)
}

export default AdminLogin