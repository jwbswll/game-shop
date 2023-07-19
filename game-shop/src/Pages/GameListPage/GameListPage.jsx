import React, { useContext } from "react";
import { GamesContext } from "../../GamesContext";
import GameCard from "../../components/GameCard/GameCard";
import style from "./GameListPage.module.scss";

const GameListPage = () => {
	const games = useContext(GamesContext);
	return (
		<div className={style.list}>
			{games.map((game, i) => {
				return <GameCard key={i} game={game} />;
			})}
		</div>
	);
};

export default GameListPage;
