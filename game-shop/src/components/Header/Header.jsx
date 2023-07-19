import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
	return (
		<header className={style.header}>
			<nav className={style.nav}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/games">Games</NavLink>
			</nav>
			<h1>JB Games</h1>
			<div>
				<NavLink to="/cart">Cart</NavLink>
			</div>
		</header>
	);
};

export default Header;
