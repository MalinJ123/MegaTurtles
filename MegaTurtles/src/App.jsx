import { useState } from "react";
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
import AdminLogin from "./Components/adminlogin";
import "../src/Stylesheet/adminlogin.css";
import UserForm from "./Components/Userform";
import "./Stylesheet/userForm.css";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [view, setView] = useState("CONTENT");
	const addToCart = (item) => {
		setCartItems([...cartItems, item]);
	};

	return (
		<div className="App">
			<Header
				cartItems={cartItems}
				setCartItems={setCartItems}
				addToCart={addToCart}
				setView={setView}
			/>
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

			{/* <AdminPage/> */}

			<Footer />
		</div>
	);
}

export default App;
