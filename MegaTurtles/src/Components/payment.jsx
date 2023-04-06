import React, { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Stylesheet/payment.css';



const ShoppingIcon = () => {
	const [showOverlay, setShowOverlay] = useState(false);
  
	const toggleOverlay = () => {
	  setShowOverlay(!showOverlay);
	}
  
	return (
	  <div>
		<FontAwesomeIcon className='shopping-cart' onClick={toggleOverlay} icon={faCartShopping} />
		{showOverlay &&
		  <div className='ShoppingIcon'>
			<h2>Overlay Content Here</h2>
			<button onClick={toggleOverlay}>Close</button>
		  </div>
		}
	  </div>
	);
  }
  

export default ShoppingIcon;
