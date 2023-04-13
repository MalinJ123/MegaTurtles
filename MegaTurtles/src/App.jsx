import { useState, useEffect } from "react";
import "./App.css";
import ContentMain from "./Components/content";
import "./Stylesheet/ContentMain.css"
import MenyPage from "./Components/MenyPage";
import "./Stylesheet/menyPage.css";
import Footer from "./Components/footer.jsx/";
import "./footer.css";
import Header from "./Components/header.jsx";
import "./header.css";
import AdminPage from "./Components/AdminPage";
import "../src/Stylesheet/adminlogin.css";
import UserForm from "./Components/Userform";
import "./Stylesheet/userForm.css";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [view, setView] = useState("CONTENT");
	const [showAdminPage, setShowAdminPage] = useState(false);
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
				<AdminPage setShowAdminPage={setShowAdminPage}/>
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
						/>
					) : null}
				</>
			)}

			<Footer setShowAdminPage={setShowAdminPage}  />
		</div>
	);
}

export default App;
