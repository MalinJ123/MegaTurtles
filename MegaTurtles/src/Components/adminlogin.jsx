const AdminLogin = () => {

	const checkPassword = ()=> {
		
	}
	
	return (
		<section className="overlay">
			<div className="form-container">
				<h2>Logga in</h2>
				<input className="input" type= "text" placeholder= "Admin"></input>
				<input className="input" type= "text" placeholder= "Lösenord"></input>
				<button onClick={checkPassword}>Logga in</button>
			</div>
		</section>
	)
}

export default AdminLogin