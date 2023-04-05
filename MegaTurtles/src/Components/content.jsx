import { useState } from "react"
import bord from '../assets/imgs/middagsbord.jpg'
import './ContentMain.css'

const ContentMain = () => {

	return (
		<main>
			
		<div className="main-container">
			<img className="glasbord" src={bord} />
			<h1>Middagshörnet</h1>
				<div className="main-text">
					<h2>Är du på jakt efter en riktig bra restaurang som erbjuder den bästa servicen och smakupplevelsen? <br/> Då har du kommit rätt! </h2>
				</div>
				<div className="text-container">
					<div className="main-para-container">
						<p className="main-para">Middagshörnan är det perfekta valet om du är ute efter god mat och ett brett utbud av drycker och matalternativ till fantastiskt bra priser.  </p>
					</div>
					<div className="main-para-container">
						<p className="main-para">Vi är en nyöppnad och mysig, liten restaurang som vill ge dig som gäst den bästa servicen och smaksensation ifrån vår nya och fräscha meny.</p> 
					</div>
					<div className="main-para-container">
						<p className="main-para">Du som gäst får även tycka till om vad du tycker om vår mat och ifall du har egna ideér på nya rätter, tveka inte att höra av dig till oss.</p>
					</div>	
				</div>
				
		</div>
	</main>
	)
	
}

export default ContentMain