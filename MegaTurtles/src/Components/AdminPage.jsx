import React, { useEffect, useState } from "react";
import "../Stylesheet/AdminPage.css";
import MenyPage from "./MenyPage";
import menu from "../data/menudata.js";
import { isValidFoodName, isValidFoodDescription, isValidUrl, isValidPrice} from "../utils/validatorAdminForm";

function AdminPage({setShowAdminPage, addDish, menuItems}) {
	const [dishName, setDishName] = useState("");
	const [dishDescription, setDishDescription] = useState("");
	const [dishImage, setDishImage] = useState("");
	const [dishPrice, setDishPrice] = useState("");
	const [importedMenu, setImportedMenu] = useState([]);

	//Dirtymeddelande 
	const [dishNameIsDirty, setDishNameIsDirty] = useState(false);
	const [textFoodIsDirty, setTextFoodIsDirty] = useState(false);
	const [urlIsDirty, setUrlIsDirty] = useState(false); 
	const [priceIsDirty, setPriceIsDirty] = useState(false);

	//Funktion från validatorAdminForm och skapade nya varibaler 
	const [dishIsValid, nameFoodErrorMessage ]= isValidFoodName(dishName)
	const [decriptionIsvalid, textFoodErrorMessage] = isValidFoodDescription(dishDescription)
	const [urlIsValid, urlErrorMessage] = isValidUrl(dishImage)
	const [priceIsvalid, priceErrorMessage] = isValidPrice(dishPrice)

	//Valedering med färg i input-fält
	const forDishNameInput = dishNameIsDirty ? (dishIsValid ? 'valid' : 'invalid') : ''
	const formUrlInput = urlIsDirty ? (urlIsValid ? 'valid' : 'invalid') : ''
	const formPriceInput = priceIsDirty ? (priceIsvalid ? 'valid' : 'invalid') : ''

	//Tömmer inputfält när du suddar ut 
	const [isDishNameEmpty, setDishNameEmpty] = useState(false);
	const [isTextFoodEmpty, setTextFoodEmpty] = useState(false);
	const [isUrlEmpty, setUrlEmpty] = useState(false);  

	
	useEffect(() => {
		setImportedMenu(menu);
	}, []);

	const handleDishNameChange = (event) => {
		setDishName(event.target.value);
		setDishNameIsDirty(true);
	};
	const resetDishNameError = () => {
		setDishNameIsDirty(false);
	}
	//textarea
	const handleDishDescriptionChange = (event) => {
		let input = event.target.value;
		setTextFoodIsDirty(true);
		console.log(event.target.value)
		if(input.length > 100 || input.length < 10 ) {
			setTextFoodIsDirty(true); 
			console.log(input.length)
		}else {
			setTextFoodIsDirty(false); 
		}
		setDishDescription(event.target.value);
	};
	//textarea
	const resetTextFoodError = () => {
		setTextFoodIsDirty(false); 
	}

	const handleDishImageChange = (event) => {
		setDishImage(event.target.value);
		setUrlIsDirty(true);
	};
	const resetUrlError = () => {
		setUrlIsDirty(false);
	}

	const handleDishPriceChange = (event) => {
		setDishPrice(Number(event.target.value));
		setPriceIsDirty(true);
	};

	const resetPriceError = () => {
		setPriceIsDirty(false); 
	}


	const handleSubmit = (event) => {
		event.preventDefault();
		if(dishName.trim() === '') {
			setDishNameEmpty(true); 
			return; 
		}if (dishDescription.trim() === '') {
			setTextFoodEmpty(true); 
			return;
		}if(dishImage.trim() === '') {
			setUrlEmpty(true); 
			return; 
		}
		// console.log("Formulärdata:", {
		// 	dishName: dishName,
		// 	dishDescription: dishDescription,
		// 	dishImage: dishImage,
		// });


	//rensar fälten när man trycker på knappen


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
		  setDishPrice("")
			//setDishNameIsDirty(false);
			//setTextFoodIsDirty(false);
			//setUrlIsDirty(false); 
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
							className={forDishNameInput}
							onBlur={() => setDishNameIsDirty(true)}
							onInput={resetDishNameError}/>
							<span> {dishNameIsDirty ? dishIsValid : '' }</span>
					</label>
					<span className="dish-error-message">{dishNameIsDirty ? nameFoodErrorMessage : ''}</span>
					<label className="my-label">
						Beskrivning av maträtten:
						<textarea 
							value={dishDescription}
							onChange={handleDishDescriptionChange}
							onInput={resetTextFoodError}
							className="my-text-input"
							rows="10" column="100"
							minlenght="10" maxlenght="100"
							placeholder="Beskriv maträttens ingredienser..." >
							</textarea>
							<span className="description-error-message">{textFoodIsDirty ? textFoodErrorMessage : '' }</span>
					</label>
					<label className="my-label">
						Länk till bild på maträtten:
						<div>
							<input
								type="text"
								value={dishImage}
								placeholder="http://..."
								onChange={handleDishImageChange}
								className={formUrlInput}
								onBlur={() => setUrlIsDirty(true)}
								onInput={resetUrlError}/>
								<span>{urlIsDirty ? urlIsValid : '' }</span>
						</div>
						<span className="url-error-message">{urlIsDirty ? urlErrorMessage : ''}</span>
					</label>

					<label className="my-label">
						Lägg till ett pris på maträtten:
						<div>
							<input
								type="text" 
								value={dishPrice}
								onChange={handleDishPriceChange}className={formPriceInput}
								onBlur={() => setPriceIsDirty(true)}
								onInput={resetPriceError}/>
								<span>{priceIsDirty ? priceIsvalid : ''}</span>
						</div>
						<span className="price-error-message">{priceIsDirty ? priceErrorMessage : ''}</span>
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
							<figure
								style={{
									width: "70%",
									height: "200px",
									backgroundImage:  `url(${item.bild})`,
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}
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
