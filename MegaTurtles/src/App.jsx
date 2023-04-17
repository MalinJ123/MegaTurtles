import { useState, useEffect } from "react";
import "./App.css";
import ContentMain from "./Components/content";
import "./Stylesheet/ContentMain.css"
import MenyPage from "./Components/MenyPage";
import "./Stylesheet/menyPage.css";
import Footer from "./Components/footer.jsx/";
import "./Stylesheet/footer.css";
import Header from "./Components/header.jsx";
import "./Stylesheet/header.css";
import AdminPage from "./Components/AdminPage";
import "../src/Stylesheet/adminlogin.css";
import UserForm from "./Components/Userform";
import "./Stylesheet/userForm.css";
import menu from "./data/menudata";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [view, setView] = useState("CONTENT");
	const [showAdminPage, setShowAdminPage] = useState(false);
  const [menuItems, setMenuItems] = useState(menu)

  const addDish = (newDish) => {
    setMenuItems((prevMenuItems) => [...prevMenuItems, newDish]);
  };

	//Alternativt här den skall vara "useState(false)"";, då värdet är false i adminLogin som standard och om lösen är validerat blir true och då skall AdminPage visas. 
	const addToCart = (item) => {
		setCartItems([...cartItems, item]);
	};

	useEffect(() => {
		if (showAdminPage === true) {
		 setView("ADMIN")
		}
		else {
			setView("CONTENT")
		}
	  }, [showAdminPage]);

	return (
		<div className="App">
			<Header
				cartItems={cartItems}
				setCartItems={setCartItems}
				addToCart={addToCart}
				setView={setView}
			/>
			{view === "ADMIN" ? (
				<AdminPage  menuItems={menuItems} addDish={addDish}
        setShowAdminPage={setShowAdminPage}/>
			) : (
				<>
					{view === "CONTENT" ? (
						<>
							{" "}
							<ContentMain />
							<UserForm />
						</>
					) : null}
					{view === "MENU" ? (
						<MenyPage
							cartItems={cartItems}
							setCartItems={setCartItems}
							addToCart={addToCart}
              menuItems={menuItems}
              addDish={addDish}
              
						/>
					) : null}
				</>
			)}

			<Footer setShowAdminPage={setShowAdminPage}  />
		</div>
	);
}

export default App;
