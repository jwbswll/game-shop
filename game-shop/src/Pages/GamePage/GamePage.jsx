import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GamesContext } from "../../GamesContext";
import style from "./GamePage.module.scss";
import { addToCart } from "../../../services/firestore-services";

const GamePage = () => {
	const [selectedPlatform, setSelectedPlatform] = useState(null);
	const [game, setGame] = useState([]);
	const [itemQuantity, setItemQuantity] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [added, setAdded] = useState(false);
	const params = useParams();
	const { games } = useContext(GamesContext);

	const navigate = useNavigate();
	useEffect(() => {
		if (loading && games.length > 0) {
			const gameData = games.filter((game) => game.id === params.id);
			if (gameData.length > 0) {
				const [{ name, image, platform, price, quantity, description, id }] =
					gameData;
				setGame({ name, image, platform, price, quantity, description, id });
				setLoading(false);
			} else {
				navigate("*");
			}
		}
	}, [games]);

	const setPlatform = (e) => {
		setSelectedPlatform(e.target.value);
	};

	const setQuantity = (e) => {
		setError(null);
		setAdded(null);
		if (game.quantity < e.target.value) {
			setError(
				new Error("Sorry, we don't have enough stock for this transaction")
			);
		}
		setItemQuantity(e.target.value);
	};

	const handleAddToCart = () => {
		if (itemQuantity <= game.quantity) {
			setAdded(null);
			setError(null);
			if (selectedPlatform) {
				addToCart(game, selectedPlatform, parseInt(itemQuantity), params.id);
				setAdded(true);
			} else {
				setError(new Error("Please select a platform"));
			}
		} else {
			setError(
				new Error("Sorry, we don't have enough stock for this transaction")
			);
		}
	};
	return (
		<>
			{!loading && (
				<div className={style.center}>
					<main className={style.main}>
						<div className={style.content}>
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
								<button className={style.add_to_cart} onClick={handleAddToCart}>
									Add to Cart
								</button>
								<div className={style.dialogues}>
									{error && (
										<div className={style.error}>
											<p>{error.message}</p>
										</div>
									)}
									{added && (
										<div className={style.added_to_cart}>
											<p>Added to cart</p>
										</div>
									)}
								</div>
							</section>
						</div>

						<div className={style.description}>
							<p>{game.description}</p>
						</div>
					</main>
				</div>
			)}
		</>
	);
};

export default GamePage;
