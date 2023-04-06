import headerLogo from '../assets/imgs/MiddagsHörnan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
import HamburgerMenu from './hamburgermenu';
import '../hamburgermenu.css';

const Header = () => {
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
	const [showShoppingCart, setShowShoppingCart] = useState(false);

	const scrollDown = () => {
		window.scrollTo({
			top: document.body.scrollHeight - window.innerHeight,
			behavior: 'smooth'
		});
	};

	const toggleOverlay = (icon) => {
		if (icon === 'hamburger') {
			setShowHamburgerMenu(!showHamburgerMenu);
		} else if (icon === 'cart') {
			setShowShoppingCart(!showShoppingCart);
		}
	};

	const hamburgerIcon = (
		<FontAwesomeIcon
			onClick={() => toggleOverlay('hamburger')}
			className='hamburger-menu'
			icon={faBars}
		/>
	);

	const closeIcon = (
		<FontAwesomeIcon
			onClick={() => toggleOverlay('hamburger')}
			className='close-icon'
			icon={faXmark}
		/>
	);

	return (
		<header>
			<img className='header-logo' src={headerLogo} alt='Logo' />

			<div className='menu-bar-container-wideScreen'>
				<h2 className='menu-bar'>Meny</h2>
				<h2 className='menu-bar'>Om MiddagsHörnan</h2>
				<h2 onClick={scrollDown} className='menu-bar'>
					Kontakt
				</h2>
			</div>

			<div className='menu-bar-container-mobile'>
				{showHamburgerMenu ? closeIcon : hamburgerIcon}
				{showHamburgerMenu && <HamburgerMenu />}
				<FontAwesomeIcon
					className='shopping-cart'
					onClick={() => toggleOverlay('cart')}
					icon={faCartShopping}
				/>
				<div>
					{showShoppingCart && (
						<div className='ShoppingIcon'>
							<h2>Overlay Content Here</h2>
							<button onClick={() => toggleOverlay('cart')}>Close</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
