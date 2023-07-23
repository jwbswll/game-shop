import React from "react";
import CartCard from "../CartCard/CartCard";

const CartWrapper = ({ cart }) => {
	return (
		<>
			{cart.map((game, i) => {
				return <CartCard game={game} key={i} />;
			})}
		</>
	);
};

export default CartWrapper;
