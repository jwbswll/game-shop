import React, { useContext } from "react";
import { GamesContext } from "../../GamesContext";
import GameCard from "../../components/GameCard/GameCard";
import style from "./GameListPage.module.scss";

const GameListPage = () => {
	const games = useContext(GamesContext);
	return (
		<section className={style.content}>
			<div className={style.list}>
				{games.map((game, i) => {
					return <GameCard key={i} game={game} />;
				})}
			</div>
		</section>
	);
};

export default GameListPage;
