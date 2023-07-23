import React, { useEffect, useState } from "react";
import {
	changeCartQuantity,
	removeFromCart,
} from "../../../services/firestore-services";
import style from "./CartCard.module.scss";

const CartCard = ({ game }) => {
	const { name, itemQuantity, selectedPlatform, quantity, image, id, price } =
		game;
	const [count, setCount] = useState(itemQuantity);
	const [error, setError] = useState(null);

	const increaseQuant = () => {
		setError(null);
		if (count <= quantity - 1) {
			setCount(parseInt(parseInt(count) + 1));
			changeCartQuantity(id, parseInt(count) + 1);
		} else {
			setError(new Error("Not enough stock"));
		}
	};

	const decreaseQuant = () => {
		setError(null);
		if (count > 1) {
			setCount(count - 1);
			changeCartQuantity(id, count - 1);
		} else {
			removeFromCart(id);
		}
	};
	return (
		<div className={style.card}>
			<img className={style.image} src={image} alt={`box art for ${name}`} />
			<div className={style.text_container}>
				<h2 className={style.name}>{name}</h2>
				<p className={style.platform}>{selectedPlatform}</p>
				<div className={style.count_container}>
					<button className={style.count_btn} onClick={decreaseQuant}>
						-
					</button>
					<p>{count}</p>
					<button className={style.count_btn} onClick={increaseQuant}>
						+
					</button>
				</div>
				<p className={style.subtotal}>
					Subtotal: <span className={style.price}>${price * itemQuantity}</span>
				</p>
				<button className={style.remove} onClick={() => removeFromCart(id)}>
					Remove
				</button>
				{error && <p>{error.message}</p>}
			</div>
		</div>
	);
};

export default CartCard;
