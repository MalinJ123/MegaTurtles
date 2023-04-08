import headerLogo from '../assets/imgs/MiddagsHörnan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
import HamburgerMenu from './hamburgermenu';
import '../hamburgermenu.css';



const Header =  ({ cartItems, setCartItems }) => {
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
	const [showShoppingCart, setShowShoppingCart] = useState(false);
	
	function removeItem(item) {
		setCartItems(prevItems => prevItems.filter(cartItem => cartItem !== item));
	  }
	  
	  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);


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

	const hamburgerIcon = <FontAwesomeIcon onClick={showHamburgerMenu} className='hamburger-menu' icon= {faBars} />

	const closeIcon = <FontAwesomeIcon onClick={showHamburgerMenu} className= 'close-icon' icon={faXmark} />

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
						<div className='CartOverlay'>
						
							{cartItems.length > 0 ? (
							cartItems.map((item, index) => (
							<div key={index}>
								<p className ="CartItem-name">{item.name} 	
								<p className="CartItem-price">{item.price} kr </p>
								<button onClick={() => removeItem(item)}> - </button></p>
										
    					</div>
					 ))) : ( <p className="emptyOverlay"> Din varukorg är tom </p>)}	
					
						<div className="TotalPrice-container">
						<p className='total-price'>Total: {totalPrice} kr</p>
						<button className="CartOverlay-Btn" onClick={() => toggleOverlay('cart')}>Betalning</button>
						</div>	
					
					</div>
					
					
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
