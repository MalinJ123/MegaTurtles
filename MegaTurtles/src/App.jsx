import { useState } from "react";
import "./App.css";
import ContentMain from "./Components/content";
import "./ContentMain.css";
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
	const [showAdminPage, setShowAdminPage] = useState(true);
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
			{showAdminPage ? (
				<AdminPage />
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

			<Footer setShowAdminPage={setShowAdminPage} />
		</div>
	);
}

export default App;
