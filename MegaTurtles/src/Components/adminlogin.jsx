import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


const AdminLogin = (props) => {
	const [close, setClose] = useState(false)
	const [password, setPassword] = useState('')
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false)
	const correctPassword = 'Mums'

	const checkPassword = ()=> {
		setHasSubmitted(true)
		if (password === correctPassword) {
			setIsPasswordCorrect(true)
		} else {
			setIsPasswordCorrect(false)
		}
		
	}

	const closeLogin = () => {
		setClose(!close)
		props.onClose();
	} 


	
	return (
		<section className="overlay" style={{ display: close ? 'none' : 'fixed' }}>
			<div className="form-container">
				<FontAwesomeIcon onClick={closeLogin} className= 'close-icon-admin' icon={faXmark} />
				
				<h2 className="login">Logga in</h2>
				<input className="input" type= "text" placeholder= "Admin"></input>
				{hasSubmitted && !isPasswordCorrect && <p>Fel lösenord</p>}
				<input className="input" type= "text" placeholder= "Lösenord"></input>
				<button onClick={checkPassword}>Logga in</button>
			</div>
		</section>
	)
}

export default AdminLogin