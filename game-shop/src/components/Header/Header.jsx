import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<header className={style.header}>
			<nav className={style.nav}>
				<NavLink className={style.home} to="/">
					<h1 className={style.title}>JB Games</h1>
				</NavLink>
			</nav>
			<div>
				<NavLink className={style.cart} to="/cart">
					<FontAwesomeIcon className={style.cart} icon={faCartShopping} />
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
