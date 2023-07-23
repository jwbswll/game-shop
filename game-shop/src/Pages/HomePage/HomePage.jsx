import React, { useContext, useState } from "react";
import FeaturedCarousel from "../../components/FeaturedCarousel/FeaturedCarousel";
import { GamesContext } from "../../GamesContext";
import style from "./HomePage.module.scss";
import GameList from "../../components/GameList/GameList";

const HomePage = () => {
	const { games } = useContext(GamesContext);

	return (
		<>
			<FeaturedCarousel games={games} />

			<GameList games={games} />
		</>
	);
};

export default HomePage;
