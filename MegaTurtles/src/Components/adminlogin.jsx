const AdminLogin = () => {
	
	return (
		<section className="overlay">
			<div className="form-container">
				<h2>Logga in</h2>
				<input className="input" type= "number" placeholder= "Personalnummer"></input>
				<input className="input" type= "text" placeholder= "Lösenord"></input>
				<button>Logga in</button>
			</div>
		</section>
	)
}

export default AdminLogin