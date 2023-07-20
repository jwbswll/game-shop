import React, { useContext } from "react";
import { GamesContext } from "../../GamesContext";
import GameCard from "../GameCard/GameCard";
import style from "./GameList.module.scss";
import GameCardWrapper from "../GameCardWrapper/GameCardWrapper";

const GameListPage = () => {
	const { games } = useContext(GamesContext);
	return (
		<>
			<h2 className={style.title}>All Games</h2>
			<section className={style.content}>
				<div className={style.list}>
					<GameCardWrapper games={games} />
				</div>
			</section>
		</>
	);
};

export default GameListPage;
