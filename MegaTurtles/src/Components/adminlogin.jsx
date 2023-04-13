import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AdminPage from "./AdminPage";

const AdminLogin = (props) => {
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
	const [isUserNameCorrect, setIsUserNameCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
	const correctPassword = "mums";
	const correctUserName = "admin";
	const allowedChars = "abcdefghijklmnopqrstuvwxyzåäö";

	const LoginEvents = (event) => {
		event.preventDefault();
		setHasSubmitted(true);
		

		if ((password === correctPassword) && (userName === correctUserName)) {
			console.log("HEEEEEEJ");
			setIsPasswordCorrect(true);
			setIsUserNameCorrect(true);
			props.setShowAdminPage(true);
			closeLogin();
			
		} else {
			if (password !== correctPassword) {
				setIsPasswordCorrect(false);
			}
			if (userName !== correctUserName) {
				setIsUserNameCorrect(false);
			}
		}
	};

	const handleInputChange = (event) => {
		setPassword(event.target.value);
		if (hasSubmitted) {
			setIsPasswordCorrect(event.target.value === correctPassword);
		}
	};

	const inputChange = (event) => {
		const input = event.target.value;
		setUserName(input);
		if (hasSubmitted) {
			setIsUserNameCorrect(input === correctUserName);
			for (let i = 0; i < input.length; i++) {
				let c = input.charAt(i).toLowerCase();
				if (!allowedChars.includes(c)) {
					setUserNameErrorMessage("Vänligen använd bara bokstäver.");
				}
			}
		}
		return [true, ""];
	};

	const closeLogin = () => {

		props.onClose();

	};

	
return (
	<section className="overlay" style={{ display: "fixed" }}>
	
		<form className="form-container">
		  <FontAwesomeIcon
			onClick={closeLogin}
			className="close-icon-admin"
			icon={faXmark}
		  />
  
		  <h2 className="login">Logga in</h2>
		  <label className="label-style">Användarnamn: </label>
		  <input
			className="input"
			type="text"
			placeholder="Admin"
			value={userName}
			onChange={inputChange}
			onBlur={inputChange}
		  />
		  {userNameErrorMessage && (
			<p className="error-message">{userNameErrorMessage}</p>
		  )}
		  {hasSubmitted && !isUserNameCorrect && userName !== "" && (
			<p className="error-message">
			  Felaktigt användarnamn, vänligen försök igen!
			</p>
		  )}
  
		  <label className="label-style">Lösenord:</label>
		  <input
			className="input"
			type="password"
			placeholder="Lösenord"
			value={password}
			onChange={handleInputChange}
			onBlur={handleInputChange}
		  />
		  {hasSubmitted && !isPasswordCorrect && password !== "" && (
			<p className="error-message">
			  Felaktigt lösenord, vänligen försök igen!
			</p>
		  )}
  
		  <button className="logIn-button" type="submit" onClick={LoginEvents}>
			Logga in
		  </button>
		</form>
	  
	</section>
  );
	};

export default AdminLogin;
