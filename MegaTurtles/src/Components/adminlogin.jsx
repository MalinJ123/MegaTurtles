import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { preprocessCSS } from 'vite';



const AdminLogin = () => {
const [close, setClose] = useState(false)
	const checkPassword = ()=> {

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
				<input className="input" type= "text" placeholder= "Lösenord"></input>
				<button onClick={checkPassword}>Logga in</button>
			</div>
		</section>
	)
}

export default AdminLogin