import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer>
			<div className="left-container">
			<p className="left-side"> Öppettider</p>
			<p className="left-under">Måndag-Fredag<br />  08:00-22:00<br />Lördag-Söndag<br />  10:00-22:00</p>
           </div>
            
			<div className="social-icons-container">
			<p className="kontakt"> Kontakta oss </p>
			<div className="icons-row">	
			<FontAwesomeIcon className="social-icon" icon={faInstagram} />
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
           </div>
		  </div>
		 
		   <div className="right-container">
		   <p className="right-side">Drottninggatan 3</p>
           <p className="right-side-text">Karlstad, Sverige<br />012-3456789</p>
		</div>
		</footer>
       
	)
} 


export default Footer