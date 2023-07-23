import { useContext, useEffect, useState } from "react";
import {
	emptyCart,
	getCartSubscription,
} from "../../../services/firestore-services";
import CartWrapper from "../../components/CartWrapper/CartWrapper";
import style from "./Cart.module.scss";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	const [itemTotal, setItemTotal] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = getCartSubscription(setCart);
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const totalPrice = cart.reduce((acc, curr) => {
			return acc + curr.itemQuantity * curr.price;
		}, 0);
		setTotal(totalPrice);
		const totalItems = cart.reduce((acc, curr) => {
			return parseInt(acc) + parseInt(curr.itemQuantity);
		}, 0);
		setItemTotal(totalItems);
	}, [cart]);

	const handleEmptyCart = () => {
		navigate("/thanks");
		emptyCart();
	};

	return (
		<>
			<h1 className={style.title}>Shopping Cart</h1>
			{cart.length > 0 ? (
				<div className={style.yes_items}>
					<div className={style.card_container}>
						<CartWrapper cart={cart} />
					</div>
					<div className={style.checkout}>
						<div className={style.total}>
							<p>
								Subtotal ({itemTotal} item{itemTotal > 1 ? "s" : ""})
							</p>
							<p>${total}</p>
						</div>
						<button onClick={handleEmptyCart} className={style.checkout_btn}>
							Checkout
						</button>
					</div>
				</div>
			) : (
				<p className={style.no_items}>No Items in cart</p>
			)}
		</>
	);
};

export default Cart;
