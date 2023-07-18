import React, { useState } from "react";
import GameCardWrapper from "../GameCardWrapper/GameCardWrapper";
import style from "./FeaturedCarousel.module.scss";

const FeaturedCarousel = ({ games }) => {
	const [current, setCurrent] = useState(0);
	const [transitionNext, setTransitionNext] = useState(false);
	const [transitionPrevious, setTransitionPrevious] = useState(false);
	const featured = games.filter((game) => game.featured);
	let index = 0;
	const nestedFeatured = featured.reduce(
		(acc, curr) => {
			if (index < 3) {
				if (acc[index].length < 3) {
					acc[index].push(curr);
				} else {
					index++;
					acc[index].push(curr);
				}
				return acc;
			}
		},
		[[], [], []]
	);

	const next = () => {
		setTransitionNext(true);

		setTimeout(() => {
			if (current <= 1) {
				setCurrent(current + 1);
			} else {
				setCurrent(0);
			}
			setTransitionNext(false);
		}, 550);
	};

	const previous = () => {
		setTransitionPrevious(true);
		setTimeout(() => {
			if (current > 0) {
				setCurrent(current - 1);
			} else {
				setCurrent(2);
			}
			setTransitionPrevious(false);
		}, 900);
	};

	return (
		<div className={style.carousel}>
			<button onClick={previous}>{`<`}</button>
			<div className={style.overflow}>
				<div
					className={
						(transitionNext && style.cards_transitionNext) ||
						(transitionPrevious && style.cards_transitionPrevious) ||
						style.cards
					}
				>
					<GameCardWrapper games={nestedFeatured[current]} />
				</div>
			</div>
			<button onClick={next}>{`>`}</button>
		</div>
	);
};

export default FeaturedCarousel;
