import React, { useState } from 'react';
// import './mermat.css';

function MyForm() {
    const [dishName, setDishName] = useState('');
    const [dishDescription, setDishDescription] = useState('');
    const [dishImage, setDishImage] = useState('');
  
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
      console.log('Formulärdata:', {
        dishName: dishName,
        dishDescription: dishDescription,
        dishImage: dishImage,
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className="my-form">
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
        <button type="submit" className="my-button">
          Skicka
        </button>
      </form>
    );
  }
  
  export default MyForm;