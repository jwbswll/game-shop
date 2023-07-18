import React from "react";
import GameCard from "../GameCard/GameCard";
import style from "./GameCardWrapper.module.scss";

const GameCardWrapper = ({ games }) => {
	return (
		<>
			{games.map((game, i) => {
				return <GameCard game={game} key={i} />;
			})}
		</>
	);
};

export default GameCardWrapper;
