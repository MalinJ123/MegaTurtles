import React from "react";
import Fish from '../assets/imgs/Paneradfisk.jpg';
import '../Stylesheet/menyPage.css'


function MenyPage() {

return (
	
	<>
		<section className="menySection"> 
			<h3 className="meny-h3">Meny</h3>
			<p>______________________________</p>
			<h4>Panerad rödspätta med kokt potatis</h4>
			<img className="meny-pic" src={Fish} alt="Beskrivning av din bild" />
			<p>Rödspätta, potatis, ärtor, remouladsås, citronskiva </p>
			<button className="läggtill-Btn">+</button>
	
		</section>

		<section className="menySection"> 
			
			<p>______________________________</p>
			<h4>Panerad rödspätta med kokt potatis</h4>
			<img className="meny-pic" src={Fish} alt="Beskrivning av din bild" />
			<p>Rödspätta, potatis, ärtor, remouladsås, citronskiva </p>
			<button className="läggtill-Btn">+</button>

		</section>

		<section className="menySection"> 
			
			<p>______________________________</p>
			<h4>Panerad rödspätta med kokt potatis</h4>
			<img className="meny-pic" src={Fish} alt="Beskrivning av din bild" />
			<p>Rödspätta, potatis, ärtor, remouladsås, citronskiva </p>
			<button className="läggtill-Btn">+</button>

		</section>
	</>
	)
	 
  }
	

  

  export default MenyPage 