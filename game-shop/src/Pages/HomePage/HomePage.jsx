import React from "react";
import FeaturedCarousel from "../../components/FeaturedCarousel/FeaturedCarousel";

const HomePage = ({ games }) => {
	return (
		<>
			<div>HomePage</div>
			<FeaturedCarousel games={games} />
		</>
	);
};

export default HomePage;
