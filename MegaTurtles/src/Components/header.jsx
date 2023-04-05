import headerLogo from '../assets/imgs/MiddagsHörnan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import HamburgerMenu from './hamburgermenu';
import '../hamburgermenu.css/';
import { useState } from 'react';


const Header = () => {
	const [show, setShow] = useState(false);
	const scrollDown = () => {
		window.scrollTo({top: document.body.scrollHeight - window.innerHeight, behavior: 'smooth'
		})
	}

	const showHamburgerMenu = () => {
		setShow(!show)
	}

	return (
		<header>

			<img className='header-logo' src={headerLogo} alt="Logo"/>
			{/* <div className='main-container-menu'> */}

				<div className='menu-bar-container-wideScreen'>
					<h2 className='menu-bar'>Meny</h2>
					<h2 className='menu-bar'>Om MiddagsHörnan</h2>
					<h2 onClick={scrollDown} className='menu-bar'>Kontakt</h2>
				</div>

				<div className='menu-bar-container-mobile'>
					<FontAwesomeIcon onClick={showHamburgerMenu} className='hamburger-menu' icon= {faBars} />
					{show && <HamburgerMenu />}
					<FontAwesomeIcon className='shopping-cart' icon={faCartShopping} />
				</div>

			{/* </div> */}
		</header>
	)

}

export default Header