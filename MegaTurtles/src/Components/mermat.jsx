import React, { useState } from "react";
// import './mermat.css';
import MenyPage from "./MenyPage";
import menu from "../data/menudata.js";

function AdminPage() {
	const [dishName, setDishName] = useState("");
	const [dishDescription, setDishDescription] = useState("");
	const [dishImage, setDishImage] = useState("");

	const handleDishNameChange = (event) => {
		setDishName(event.target.value);
	};

	const handleDishDescriptionChange = (event) => {
		setDishDescription(event.target.value);
	};

	const handleDishImageChange = (event) => {
		setDishImage(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Formulärdata:", {
			dishName: dishName,
			dishDescription: dishDescription,
			dishImage: dishImage,
		});
	};
	return (
		<>
			<section className="Admin-Form-Container">
				<h1 className="AdminPage">AdminPage</h1>
				<form onSubmit={handleSubmit} className="my-form">
					<h2 className="EditMenu">Redigera Meny alternativ</h2>
					<label className="my-label">
						Maträttens namn:
						<input
							type="text"
							value={dishName}
							onChange={handleDishNameChange}
							className="my-input"
						/>
					</label>
					<label className="my-label">
						Beskrivning av maträtten:
						<textarea
							value={dishDescription}
							onChange={handleDishDescriptionChange}
							className="my-input"
						/>
					</label>
					<label className="my-label">
						Länk till bild på maträtten:
						<input
							type="text"
							value={dishImage}
							onChange={handleDishImageChange}
							className="my-input"
						/>
					</label>
					<button type="submit" className="save-btn">
						Spara
					</button>
					<button className="edit-btn">Redigera</button>
					<button className="delete-btn">Radera</button>
				</form>
			</section>
			<section className="MenuPageContainer">
				{menu.map((item,index ) => (
						<div key={index}>
					<div>
							<h3>{item.name}</h3>
							<p>{item.description}</p>
						</div>
						<div>
							<button
								className="edit-btn"
								onClick={() => handleEdit(item.namn)}
							>
								Redigera
							</button>
							<button
								className="delete-btn"
								onClick={() => handleDelete(item.namn)}
							>
								Ta bort
							</button>
						</div>
					</div>
				))}
			</section>
		</>
	);
}

export default AdminPage;
