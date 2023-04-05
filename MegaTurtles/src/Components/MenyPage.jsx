import React from "react";
import panerad from '../assets/imgs/panerad.jpg';
import Lammstek from '../assets/Imgs/lammstek.jpg';
import kyckling from '../assets/Imgs/kyckling.jpg';
import Entrecote from '../assets/Imgs/Entrecote.jpg';
import sallad from '../assets/Imgs/sallad.jpg';
import '../Stylesheet/menyPage.css'


function MenyPage() {

	const matratter = [
	  {
		namn: "Rödspätta",
		bild: panerad,
		beskrivning: "Panerad rödspätta som serveras med potatis, citronsås och ärtor",
		price: "125 Kr",
	  },
	  {
		namn: "Lammstek",
		bild: Lammstek,
		beskrivning: "Lammstek med potatisgratäng och rödvinssås och sparris",
		price: "125 Kr",
	  },
	  {
		namn: "Grillad Kyckling",
		bild: kyckling,
		beskrivning: "Grillad kyckling med pommens, sallad, tomater och kärlek",
		price: "149 Kr",
	  },
	  {
		namn: "Entrecote",
		bild: Entrecote,
		beskrivning: "Saftig Entrecote med pommes och bearnaisesås",
		price: "225 Kr",
	  },
	  {
		namn: "Sallad",
		bild: sallad,
		beskrivning: "Saftig sallad med inslag av natur. ",
		price: "105 Kr"
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
			<h3 className="h3matratter">{matratt.namn}</h3>
			<img className="meny-pic" src={matratt.bild} alt="Beskrivning av din bild" />	
			
			<section className="paraSection">
				<p className="para-meny-text">{matratt.beskrivning}</p>
			</section>
				<p className="price">{matratt.price}</p>
			<button className="plusbtn">Lägg till </button>
			<button className="plusbtn-mobile">+</button>

			
		  </section>
			
		))}
	  </>
	);
  }
  

  

  export default MenyPage 