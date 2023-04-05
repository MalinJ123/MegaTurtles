import React from "react";
import Fish from '../assets/imgs/Paneradfisk.jpg';
import Kött from '../assets/Imgs/Kött.jpg';
import kyckling from '../assets/Imgs/kyckling.jpg';
import '../Stylesheet/menyPage.css'


function MenyPage() {

	const matratter = [
	  {
		namn: "Rödspätta",
		bild: Fish,
		beskrivning: "En härligt rödspätta som serveras med potatis, citronsås och ärtor"
	  },
	  {
		namn: "Lammstek",
		bild: Kött,
		beskrivning: "Lammstek med potatisgratäng och bearnaisesås"
	  },
	  {
		namn: "Grillad Kyckling",
		bild: kyckling,
		beskrivning: "Grillad kyckling med pommens, sallad, tomater och"
	  }
	];
  
	return (
	  <>
		<div className="menySection">
			<h3 className="meny-h3">Meny</h3>
		</div>
		{matratter.map((matratt, index) => (
		  <section className="menySection" key={index}>
			<p>______________________________</p>
			<h4>{matratt.namn}</h4>
			<img className="meny-pic" src={matratt.bild} alt="Beskrivning av din bild" />	
			
			<section className="beskrivningP">
				<p>{matratt.beskrivning}</p>
			</section>
			<button className="läggtill-Btn">+</button>
		  </section>
			
		))}
	  </>
	);
  }
  

  

  export default MenyPage 