import headerLogo from '../assets/imgs/MiddagsHörnan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

	return (
		<header>
		<FontAwesomeIcon className='shopping-cart' icon={faCartShopping} />
		<img className='header-logo' src={headerLogo} alt="Logo"/>
		<FontAwesomeIcon className='hamburger-menu' icon= {faBars} />
		</header>
	)

}

export default Header