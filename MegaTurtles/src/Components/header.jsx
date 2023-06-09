import headerLogo from "../assets/imgs/MiddagsHörnan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import HamburgerMenu from "./hamburgermenu";
import "../Stylesheet/hamburgermenu.css";

const Header = ({ cartItems, setCartItems, setView, setShowAdminPage }) => {
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
	const [showShoppingCart, setShowShoppingCart] = useState(false);


	function showNav() {
		if (!showHamburgerMenu) {
			setShowHamburgerMenu(true);
		} else {
			setShowHamburgerMenu(false);
		}
	}

	function removeItem(item) {
		setCartItems((prevItems) =>
			prevItems.filter((cartItem) => cartItem !== item)
		);
	}

	const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);


	const scrollDown = () => {
		window.scrollTo({
			top: document.body.scrollHeight - window.innerHeight,
			behavior: "smooth",
		});
	};

	const toggleOverlay = (icon) => {
		if (icon === "hamburger") {
			setShowHamburgerMenu(!showHamburgerMenu);
		} else if (icon === "cart") {
			setShowShoppingCart(!showShoppingCart);
		}
	};

	return (
		<header>
			<img
				className="header-logo"
				src={headerLogo}
				alt="Logo"
				onClick={() => {
					setView("CONTENT");
					setShowAdminPage(false)
				}}
			/>

			<div className="menu-bar-container-wideScreen">
				<h2
					className="menu-bar"
					onClick={() => {
						setView("MENU");
						setShowAdminPage(false)
					}}
				>
					Meny
				</h2>
				<h2
					className="menu-bar"
					onClick={() => {
						setView("CONTENT");
						setShowAdminPage(false)
					}}
				>
					Om MiddagsHörnan
				</h2>
				<h2 onClick={scrollDown} className="menu-bar">
					Kontakt
				</h2>
			</div>

			<div className="menu-bar-container-mobile">
				{!showHamburgerMenu ? (
					<FontAwesomeIcon
						onClick={() => {
							showNav();
						}}
						className="hamburger-menu"
						icon={faBars}
					/>
				) : (
					<FontAwesomeIcon
						onClick={() => {
							showNav();
						}}
						className="close-icon"
						icon={faXmark}
					/>
				)}
				{showHamburgerMenu ? <HamburgerMenu setView={setView} /> : null}
				<FontAwesomeIcon
					className="shopping-cart"
					onClick={() => toggleOverlay("cart")}
					icon={faCartShopping}
				/>
				<div>
					{showShoppingCart && (
						<div className="CartOverlay">
							<div className="Cart-list">
								{cartItems.length > 0 ? (
									<div>
										<h4 className="FullOverlay">
											Din varukorg
										</h4>
										{cartItems.map((item, index) => (
											<div
												className="CartItemContainer"
												key={index}
											>
												<p className="CartItem-name">
													{item.name}
												</p>
												<p className="CartItem-price">
													{item.price} kr
												</p>
												<button
													onClick={() =>
														removeItem(item)
													}
												>
													{" "}
													-{" "}
												</button>
											</div>
										))}
									</div>
								) : (
									<h4 className="emptyOverlay">
										Din varukorg är tom
									</h4>
								)}
							</div>
							<div className="TotalPrice-container">
								<div className="total">
									<p className="total-price">
										Total: {totalPrice} kr
									</p>
									<button
										className="CartOverlay-Btn"
										onClick={() => toggleOverlay("cart")}
									>
										Betalning
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
