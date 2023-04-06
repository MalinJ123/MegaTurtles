import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminLogin = () => {

	const checkPassword = ()=> {

	}


	
	return (
		<section className="overlay">
			<div className="form-container">
				<FontAwesomeIcon className= 'close-icon-admin' icon={faXmark} />
				<h2 className="login">Logga in</h2>
				<input className="input" type= "text" placeholder= "Admin"></input>
				<input className="input" type= "text" placeholder= "Lösenord"></input>
				<button onClick={checkPassword}>Logga in</button>
			</div>
		</section>
	)
}

export default AdminLogin