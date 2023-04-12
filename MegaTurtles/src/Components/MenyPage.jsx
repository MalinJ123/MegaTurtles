import React, { useState } from "react";
import panerad from '../assets/imgs/panerad.jpg';
import Lammstek from '../assets/Imgs/lammstek.jpg';
import kyckling from '../assets/Imgs/kyckling.jpg';
import Entrecote from '../assets/Imgs/Entrecote.jpg';
import sallad from '../assets/Imgs/sallad.jpg';
import Drycker from '../assets/imgs/Drycker.jpg'
import '../Stylesheet/menyPage.css';

const MenyPage = ({ cartItems, setCartItems, addToCart }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleAddToCart = (item) => {
    addToCart(item);
    setClickCount(clickCount + 1);
  };

  const menu = [
    {
      namn: "Rödspätta",
      bild: panerad,
      beskrivning: "Panerad rödspätta som serveras med potatis, citronsås och ärtor",
      price: 125,
    },
    {
      namn: "Lammstek",
      bild: Lammstek,
      beskrivning: "Lammstek med potatisgratäng och rödvinssås och sparris",
      price: 125 ,
    },
    {
      namn: "Kyckling",
      bild: kyckling,
      beskrivning: "Grillad kyckling med pommens, sallad, tomater och kärlek",
      price: 149,
    },
    {
      namn: "Entrecote",
      bild: Entrecote,
      beskrivning: "Saftig Entrecote med pommes och bearnaisesås",
      price: 225,
    },
    {
      namn: "XL Sallad",
      bild: sallad,
      beskrivning: "Saftig sallad med inslag av natur. ",
      price: 105
    },
    {
      namn: "Drycker",
      bild: Drycker,
      beskrivning: "Vatten, Zingo, Trocadero, Sprite, Coca Cola, Fanta ",
      price: 15
    }
  ];

  return (
    <>
      <div className="menuSection">
        <h3 className="menuH3">Menu</h3>
      </div>
      {menu.map((menuItem, index) => (
        <section className="menuSection" key={index}>
          <p>______________________________</p>
          <h3 className="menu-item-title">{menuItem.namn}</h3>
          <img className="menu-pic" src={menuItem.bild} alt="Beskrivning av din bild" />

          <section className="paraSection">
            <p className="para-menu-text">{menuItem.beskrivning}</p>
          </section>
          <p className="price">{menuItem.price} kr</p>

          <button className="plusbtn-mobile" onClick={() => handleAddToCart({ name: menuItem.namn, price: menuItem.price })}>
            +
          </button>

          <button className="plusbtn" onClick={() => {
            handleAddToCart({ name: menuItem.namn, price: menuItem.price });
          }}> Lägg till </button>
          {/* <p>Antal klick: {clickCount}</p> */}
        </section>
      ))}
    </>
  );
};

export default MenyPage;
