import React, { useContext } from "react";
import FeaturedCarousel from "../../components/FeaturedCarousel/FeaturedCarousel";
import { GamesContext } from "../../GamesContext";
import style from "./HomePage.module.scss";
import GameListPage from "../GameListPage/GameListPage";

const HomePage = () => {
	const games = useContext(GamesContext);
	return (
		<>
			<FeaturedCarousel games={games} />
			<GameListPage />
		</>
	);
};

export default HomePage;
