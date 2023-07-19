import React, { useContext } from "react";
import FeaturedCarousel from "../../components/FeaturedCarousel/FeaturedCarousel";
import { GamesContext } from "../../GamesContext";

const HomePage = () => {
	const games = useContext(GamesContext);
	return (
		<>
			<div>HomePage</div>
			<FeaturedCarousel games={games} />
		</>
	);
};

export default HomePage;
