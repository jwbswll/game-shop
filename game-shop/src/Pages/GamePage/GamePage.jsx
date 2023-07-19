import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GamesContext } from "../../GamesContext";
import style from "./GamePage.module.scss";
import { CartContext } from "../../CartContext";

const GamePage = () => {
	const { cart, setCart } = useContext(CartContext);
	const [selectedPlatform, setSelectedPlatform] = useState(null);
	const [itemQuantity, setItemQuantity] = useState(1);
	const [error, setError] = useState(null);
	const [added, setAdded] = useState(false);
	const params = useParams();
	const games = useContext(GamesContext);
	const game = games.filter((game) => game.id === params.id);
	const [{ name, image, platform, price, quantity }] = game;

	const setPlatform = (e) => {
		setSelectedPlatform(e.target.value);
	};
	const setQuantity = (e) => {
		setItemQuantity(e.target.value);
	};

	const addToCart = () => {
		setError(null);
		if (selectedPlatform) {
			setCart([...cart, { params, selectedPlatform, itemQuantity }]);
			setAdded(true);
		} else {
			setError(new Error("Please select a platform"));
		}
	};
	return (
		<main className={style.content}>
			<img src={image} alt="" />
			<h2>{name}</h2>
			<p>${price}</p>
			<label htmlFor="quantity">Quantity:</label>
			<input
				type="number"
				id="quantity"
				onChange={setQuantity}
				max={quantity}
				value={itemQuantity}
			/>
			<select onChange={setPlatform} name="platforms" id="platforms">
				<option value="">Select platform</option>
				{platform.map((p, i) => {
					return (
						<option key={i} value={p}>
							{p}
						</option>
					);
				})}
			</select>
			<button onClick={addToCart}>Add to Cart</button>
			{error && <p>{error.message}</p>}
			{added && <p>Added to cart</p>}
		</main>
	);
};

export default GamePage;
