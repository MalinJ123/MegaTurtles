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
	const [submitMessageAdminPage, setSubmitMessageAdminPage] = useState('')

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

	// Här kommer koden för att redigera i menyn.
	const [edit, setEdit] = useState(null)
	const [isEditing, setIsEditing] = useState(false)
	const [newTextName, setNewTextName] = useState('')
	const [newTextDescription, setNewTextDescription] = useState('')
	const [newImage, setNewImage] = useState('')
	const [newPrice, setNewPrice] = useState('')

	
	const handleEditClick = (index) => {
		console.log('Jag är en funktion ', index)
		setIsEditing(true)
		setEdit(index)
		setNewTextName(importedMenu[index].namn);
  		setNewTextDescription(importedMenu[index].beskrivning);
  		setNewImage(importedMenu[index].bild);
  		setNewPrice(importedMenu[index].price);
	}
 	const handleInputEditChange = (event) => {
		 const { name, value } = event.target;
		 switch (name) {
			 case "newTextName":
			setNewTextName(value)
			break;
			case "newTextDescription":
				setNewTextDescription(value);
				break;
			  case "newImage":
				setNewImage(value);
				break;
			  case "newPrice":
				setNewPrice(Number(value));
				break;
			  default:
				break;
			}
		  
		 }
	

	const handleSaveChanges = () => {
		const updatedImportedMenu = [...importedMenu];
  		updatedImportedMenu[edit].namn = newTextName;
 		 updatedImportedMenu[edit].beskrivning = newTextDescription;
 		 updatedImportedMenu[edit].bild = newImage;
  		updatedImportedMenu[edit].price = newPrice;
  		setImportedMenu(updatedImportedMenu);
  		setEdit(null);
		  setIsEditing(false)
	}

	

	useEffect(() => {
		setImportedMenu(menu);
	}, []);

	const handleDishNameChange = (event) => {
		setDishName(event.target.value);
		//setDishNameIsDirty(true);
	};
	const resetDishNameError = () => {
		setDishNameIsDirty(false);
	}
	//textarea
	const handleDishDescriptionChange = (event) => {
		let input = event.target.value;
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
	};
	const resetUrlError = () => {
		setUrlIsDirty(false);
	}

	const handleDishPriceChange = (event) => {
		setDishPrice(Number(event.target.value));
		//setPriceIsDirty(true);
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
		setDishNameIsDirty(false);
		setTextFoodIsDirty(false);
		setUrlIsDirty(false); 
		setPriceIsDirty(false); 
		setSubmitMessageAdminPage('Nu är det tillagt!')

		
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
		  setDishPrice("");
		
}

	
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
					<div className="form-input">
						<label className="my-label">
							Maträttens namn:
						</label>
							<input
								type="text"
								value={dishName}
								onChange={handleDishNameChange}
								className={forDishNameInput}
								onBlur={() => setDishNameIsDirty(true)}
								onInput={resetDishNameError}/>
								<span> {dishNameIsDirty ? dishIsValid : '' }</span>	
							<span className="dish-error-message">{dishNameIsDirty ? nameFoodErrorMessage : ''}</span>
					</div>
					<div className="form-input">
						<label className="my-label">
							Beskrivning av maträtten:
						</label>
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
					</div>

					<div className="form-input">
						<label className="my-label">
							Länk till bild på maträtten:
						</label>
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

					<label className="my-label">
						Lägg till ett pris på maträtten:
						<input
							step={10}
							type="number" 
							value={dishPrice}
							onChange={handleDishPriceChange}
							className="my-input"
						/>
					</label>


					<div className="form-price-input">
						<label className="my-label">
							Lägg till ett pris på maträtten:
						</label>
							<input
								type="text" 
								value={dishPrice}
								onChange={handleDishPriceChange}className={formPriceInput}
								onBlur={() => setPriceIsDirty(true)}
								onInput={resetPriceError}/>
								<span>{priceIsDirty ? priceIsvalid : ''}</span>
					</div>
					<div className="price-message">
						<span className="price-error-message">{priceIsDirty ? priceErrorMessage : ''}</span>
					</div>
						
					<button type="submit" className="save-btn">
						Lägg till
					</button>
					<div>
						{submitMessageAdminPage && <p className="submit-food-meddelande">{submitMessageAdminPage}</p>}
					</div>
	
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
								<p className="price">{item.price} kr </p>
							</div>

							{ isEditing && edit === index ? (
   								 <>
     						 <input
							  	className="edit-input"
       							type="text"
								name="newTextName"
        						value={newTextName}
        						onChange={handleInputEditChange}/>
      						
   								 </>
  							) : ( null
    						// <h3 className="adminMeny-Title">{item.namn}</h3>
  							)}
						{ isEditing && edit === index ? ( 
						<>
     						 <input
							  className="edit-input"
       							type="text"
								name="newImage"
        						value={newImage}
        						onChange={handleInputEditChange}/>
      						
   								 </> ) : (
							

							// <figure 
							// className="AdminPic"
							// 	style={{
							// 		width: "50%",
							// 		height: "200px",
							// 		backgroundImage:  `url(${item.bild})`,
							// 		backgroundPosition: "center",
							// 		backgroundSize: "cover",
							// 	}}
							// />
							null  )}

							
								{ isEditing && edit === index ? (
									<>
									<textarea
									className="edit-input"
									  name="newTextDescription"
									  value={newTextDescription}
									  onChange={handleInputEditChange}/>
									
										  </> ) : ( 
										//   <p className="mobile-para-description">{item.beskrivning}</p>
										null
								)}
								
							
							
								{ isEditing && edit === index ? (
									<>
									<input
									  className="edit-input"
									  type="text"
									  name="newPrice"
									  value={newPrice}
									  onChange={handleInputEditChange}/><div>
									<button 
										className="save-edit-btn"
										onClick={handleSaveChanges}>Spara</button>
										</div>
										  </>
										   ) : (null
									// <p>{item.price} kr </p>
								)}
								
							

							<div>
								<button
									className="edit-btn"
									onClick={() => handleEditClick(index)}>
									Redigera
								</button>
								<button
									className="delete-btn"
									onClick={() => handleDelete(item)}>
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
