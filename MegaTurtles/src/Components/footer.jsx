import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import AdminLogin from "./adminlogin";
import { useState } from "react";
import { useCallback } from "react";

const Footer = ({ setShowAdminPage }) => {
	const [open, setOpen] = useState(false);

	const openLogin = useCallback(() => {
		console.log("Funktionen körs");
		setOpen((prevOpen) => !prevOpen);
		window.scrollTo(0, 0);
	}, []);

	console.log("open:", open);

	return (
		<>
			<footer>
				<div className="left-container">
					<p className="left-side"> Öppettider</p>
					<p className="left-under">
						Måndag-Fredag
						<br /> 08:00-22:00
						<br />
						Lördag-Söndag
						<br /> 10:00-22:00
					</p>
				</div>

				<div className="social-icons-container">
					<p className="kontakt"> Kontakta oss </p>
					<div className="icons-row">
						<FontAwesomeIcon
							className="social-icon"
							icon={faInstagram}
						/>
						<FontAwesomeIcon
							className="social-icon"
							icon={faFacebook}
						/>
						<FontAwesomeIcon
							className="social-icon"
							icon={faTwitter}
						/>
					</div>
				</div>

				<div className="right-side-container">
					<p className="right-side-text">
						Drottninggatan 3<br />
						Karlstad, Sverige
						<br />
						012-3456789
					</p>
					<p className="admin-login-text" onClick={openLogin}>
						Admin inlogg
						<FontAwesomeIcon
							className="admin-icon"
							icon={faRightToBracket}
						/>
					</p>
				</div>
			</footer>
			{open && (
				<AdminLogin
					setShowAdminPage={setShowAdminPage}
					onClose={openLogin}
				/>
			)}
		</>
	);
};

export default Footer;
