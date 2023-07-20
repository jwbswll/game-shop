import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GamesContext } from "../../GamesContext";
import style from "./GamePage.module.scss";
import { CartContext } from "../../CartContext";

const GamePage = () => {
	const { cart, setCart } = useContext(CartContext);
	const [selectedPlatform, setSelectedPlatform] = useState(null);
	const [game, setGame] = useState([]);
	const [itemQuantity, setItemQuantity] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [added, setAdded] = useState(false);
	const params = useParams();
	const { games } = useContext(GamesContext);

	useEffect(() => {
		if (loading && games.length > 0) {
			const gameData = games.filter((game) => game.id === params.id);
			const [{ name, image, platform, price, quantity }] = gameData;
			setGame({ name, image, platform, price, quantity });
			setLoading(false);
		}
	}, [games]);

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
		<>
			{!loading && (
				<main className={style.content}>
					<img className={style.image} src={game.image} alt="" />
					<section className={style.text_container}>
						<h2 className={style.title}>{game.name}</h2>
						<p className={style.price}>${game.price}</p>
						<div className={style.quantity_container}>
							<label className={style.quantity_label} htmlFor="quantity">
								Quantity:
							</label>
							<input
								className={style.quantity_input}
								type="number"
								id="quantity"
								onChange={setQuantity}
								max={game.quantity}
								value={itemQuantity}
							/>
						</div>
						<select
							className={style.platform_select}
							onChange={setPlatform}
							name="platforms"
							id="platforms"
						>
							<option value="">Select platform</option>
							{game.platform.map((p, i) => {
								return (
									<option key={i} value={p}>
										{p}
									</option>
								);
							})}
						</select>
						<button className={style.add_to_cart} onClick={addToCart}>
							Add to Cart
						</button>
					</section>
				</main>
			)}
			{error && <p className={style.error}>{error.message}</p>}
			{added && <p className={style.added_to_cart}>Added to cart</p>}
		</>
	);
};

export default GamePage;
