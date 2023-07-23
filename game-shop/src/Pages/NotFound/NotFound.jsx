import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Thanks/Thanks.module.scss";

const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	}, []);

	return (
		<div className={style.content}>
			<h1 className={style.title}>Uh oh! Page Not Found</h1>
			<p className={style.redirect}>Redirecting you back to the home page...</p>
		</div>
	);
};

export default NotFound;
