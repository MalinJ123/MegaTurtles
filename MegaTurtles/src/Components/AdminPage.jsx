import React, { useEffect, useState } from "react";
import "../Stylesheet/AdminPage.css";
import MenyPage from "./MenyPage";
import menu from "../data/menudata.js";

function AdminPage({setShowAdminPage, addDish, menuItems}) {
	const [dishName, setDishName] = useState("");
	const [dishDescription, setDishDescription] = useState("");
	const [dishImage, setDishImage] = useState("");
	const [dishPrice, setDishPrice] = useState("");
	const [importedMenu, setImportedMenu] = useState([]);
	
	
	useEffect(() => {
		setImportedMenu(menu);
	}, []);
	const handleDishNameChange = (event) => {
		setDishName(event.target.value);
	};

	const handleDishDescriptionChange = (event) => {
		setDishDescription(event.target.value);
	};

	const handleDishImageChange = (event) => {
		setDishImage(event.target.value);
	};

	const handleDishPriceChange = (event) => {
		setDishPrice(Number(event.target.value));
	};


	const handleSubmit = (event) => {
		event.preventDefault();
		const newDish = {
			namn: dishName,
			beskrivning: dishDescription,
			bild: dishImage,
			price: dishPrice
		  };
		  
		  addDish(newDish)
		  setImportedMenu([...importedMenu, newDish]);
		  
		  setDishName("");
		  setDishDescription("");
		  setDishImage("");
		  setDishPrice()
		};
	
	//Den här knappen tar bort hela menyalternativet du klickar på i adminPage vyn
	const handleDelete = (itemToDelete) => {
		const updatedItems = importedMenu.filter(
			(item) => item !== itemToDelete
		);
		setImportedMenu(updatedItems);
	};

	return (
		<>
			<section className="Admin-Form-Container">
				<h1 className="AdminPage">AdminPage</h1>
				<button onClick={() => {setShowAdminPage(false)}}>Logga ut</button>
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
							id="image-url" name="image-url" placeholder="https://example.com/image.jpg"
							value={dishImage}
							onChange={handleDishImageChange}
							className="my-input"
						/>
					</label>

					<label className="my-label">
						Lägg till ett pris på maträtten:
						<input
							type="text" 
							value={dishPrice}
							onChange={handleDishPriceChange}
							className="my-input"
						/>
					</label>


					<button type="submit" className="save-btn">
						Lägg till
					</button>
	
				</form>
			</section>
			<section className="MenuPageContainer">
				{importedMenu &&
					importedMenu.map((item, index) => (
						<div className="MenuItem" key={index}>
							<h3 className="adminMeny-Title">{item.namn}</h3>
							<img className="AdminPic" src={item.bild} alt="Bild på mat"
								
							/>
							<div className="item-description">
								<p className="mobile-para-description">{item.beskrivning}</p>
							</div>
							<div>
								<p>{item.price} kr </p>
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
									onClick={() => handleDelete(item)}
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
