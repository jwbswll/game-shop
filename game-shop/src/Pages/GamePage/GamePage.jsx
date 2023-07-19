import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GamesContext } from "../../GamesContext";

const GamePage = () => {
	const params = useParams();
	const games = useContext(GamesContext);
	console.log("params", params);
	console.log("games context", games);
	const game = games.filter((game) => game.id === params.id);
	const [{ name, image, platform, price }] = game;
	console.log("game", game);
	console.log("platform", platform);
	return (
		<div>
			<img src={image} alt="" />
			<h2>{name}</h2>
			<p>{price}</p>
			<select name="platforms" id="platforms">
				{platform.map((p, i) => {
					return (
						<option key={i} value={p}>
							{p}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default GamePage;
