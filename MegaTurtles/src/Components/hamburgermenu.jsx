import MenyPage from "./MenyPage"
import { useState } from "react"


const HamburgerMenu = ({setView}) => {
	const scrollDown = () => {
		window.scrollTo({
			top: document.body.scrollHeight - window.innerHeight,
			behavior: "smooth",
		});
	};
	return (

		<nav className="nav-hamburger-menu">
			<ul className="links-hamburger-menu">
			<li onClick={() => {setView("MENU")}}>Meny</li>
			<li onClick={() => {setView("CONTENT")}}>Om MiddagsHörnan</li>
            <li onClick={scrollDown}>Kontakt</li>
			</ul>
		</nav>
	)
}

export default HamburgerMenu