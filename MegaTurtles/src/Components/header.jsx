import headerLogo from '../assets/imgs/MiddagsHörnan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

	return (
		<header>
		
			<img className='header-logo' src={headerLogo} alt="Logo"/>
			{/* <div className='main-container-menu'> */}

				<div className='menu-bar-container-wideScreen'>
					<h2 className='menu-bar'>Meny</h2>
					<h2 className='menu-bar'>Om MiddagsHörnan</h2>
					<h2 className='menu-bar'>kontakt</h2>
				</div>

				<div className='menu-bar-container-mobile'>
					<FontAwesomeIcon className='hamburger-menu' icon= {faBars} />
					<FontAwesomeIcon className='shopping-cart' icon={faCartShopping} />
				</div>

			{/* </div> */}
		</header>
	)

}

export default Header