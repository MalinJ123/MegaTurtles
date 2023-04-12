import React, { useState } from "react";
import "../Stylesheet/menyPage.css";
import { menu } from "../data/menudata";

const MenyPage = ({ cartItems, setCartItems, addToCart }) => {
	const [clickCount, setClickCount] = useState(0);

	const handleAddToCart = (item) => {
		addToCart(item);
		setClickCount(clickCount + 1);
	};

	return (
		<>
			<div className="menuSection">
				<h3 className="menuH3">Menu</h3>
			</div>
			{menu.map((menuItem, index) => (
				<section className="menuSection" key={index}>
					<p>______________________________</p>
					<h3 className="menu-item-title">{menuItem.namn}</h3>
					<img
						className="menu-pic"
						src={menuItem.bild}
						alt="Beskrivning av din bild"
					/>
					<section className="paraSection">
						<p className="para-menu-text">{menuItem.beskrivning}</p>
					</section>
					<p className="price">{menuItem.price} kr</p>
					<button
						className="plusbtn-mobile"
						onClick={() =>
							handleAddToCart({
								name: menuItem.namn,
								price: menuItem.price,
							})
						}
					>
				
					</button>

					<button
						className="plusbtn"
						onClick={() => {
							handleAddToCart({
								name: menuItem.namn,
								price: menuItem.price,
							});
						}}
					>
						{" "}
						Lägg till{" "}
					</button>
					{/* <p>Antal klick: {clickCount}</p> */}
				</section>
			))}
		</>
	);
};

export default MenyPage;
