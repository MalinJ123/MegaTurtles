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
	const [edit, setEdit] = useState(null)
	const [isEditing, setIsEditing] = useState(false)
	const [newTextName, setNewTextName] = useState('')
	const [newTextDescription, setNewTextDescription] = useState('')
	const [newImage, setNewImage] = useState('')
	const [newPrice, setNewPrice] = useState('')

	// Här kommer koden för att redigera i menyn.
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
	};

	const handleDishDescriptionChange = (event) => {
		setDishDescription(event.target.value);
	};

	const handleDishImageChange = (event) => {
		setDishImage(event.target.value);
	};

	const handleDishPriceChange = (event) => {
		setDishPrice(Number(event.target.value));
		//   setDishPrice(event.target.value); 
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
		  setDishPrice(0)
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
							step={10}
							type="number" 
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
