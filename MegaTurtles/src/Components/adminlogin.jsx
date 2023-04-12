import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AdminPage from "./AdminPage";

const AdminLogin = (props) => {
	const [close, setClose] = useState(false);
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
	const [isUserNameCorrect, setIsUserNameCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [showAdminPage, setShowAdminPage] = useState(false); // Ska använda detta på något vis
	const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
	const correctPassword = "mums";
	const correctUserName = "admin";
	const allowedChars = "abcdefghijklmnopqrstuvwxyzåäö";

	const LoginEvents = (event) => {
		event.preventDefault();
		setHasSubmitted(true);

		if (password === correctPassword && userName === correctUserName) {
			setIsPasswordCorrect(true);
			setIsUserNameCorrect(true);
			setShowAdminPage(true); // Nu vill jag skapa en funktion där jag skickas vidare till adminsidan som ska ligga i funktionen 									LoginEvent. Jag tror att jag ska börja med att skapa en statevariabel för att visa den sidan.
			setClose(true);

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
		setClose(!close);
		props.onClose();
	};

	return (
		<section
			className="overlay"
			style={{ display: close ? "none" : "fixed" }}
		>
			{showAdminPage ? (
				<AdminPage />
			) : (
				<form className="form-container">
					<FontAwesomeIcon
						onClick={closeLogin}
						className="close-icon-admin"
						icon={faXmark}
					/>

					<h2 className="login">Logga in</h2>
					<label className="label-style">Avändarnamn: </label>
					<input
						className="input"
						type="text"
						placeholder="Admin"
						value={userName}
						onChange={inputChange}
						onBlur={inputChange}
					></input>
					{userNameErrorMessage && (
						<p className="error-message">{userNameErrorMessage}</p>
					)}
					{hasSubmitted && !isUserNameCorrect && userName !== "" && (
						<p className="error-message">
							Felaktigt användarnamn, Vänligen prova igen!
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
					></input>
					{hasSubmitted && !isPasswordCorrect && password !== "" && (
						<p className="error-message">
							Felaktigt lösenord, vänligen prova igen!
						</p>
					)}

					<button
						className="logIn-button"
						type="submit"
						onClick={LoginEvents}
					>
						{" "}
						Logga in
					</button>
				</form>
			)}
		</section>
	);
};

export default AdminLogin;
