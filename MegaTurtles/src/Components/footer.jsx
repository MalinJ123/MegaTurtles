import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer>
			<p> Öppettider<br />Måndag-Fredag<br />08:00-22:00<br />Lördag-Söndag<br />10:00-22:00</p>
            <div className="social-icons-container">
			<FontAwesomeIcon className="social-icon" icon={faInstagram} />
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
           </div>
           <p className="right-side-text">Drottninggatan 3<br />Karlstad, Sverige<br />012-3456789</p>
		</footer>
       
	)
} 


export default Footer