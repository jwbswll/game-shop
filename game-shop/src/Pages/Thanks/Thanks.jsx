import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Thanks.module.scss";

const Thanks = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	}, []);

	return (
		<div className={style.content}>
			<h1 className={style.title}>Thanks for shopping with us!</h1>
			<p className={style.redirect}>Redirecting you back to the home page...</p>
		</div>
	);
};

export default Thanks;
