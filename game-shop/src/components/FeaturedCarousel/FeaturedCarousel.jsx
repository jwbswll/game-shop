import React, { useState } from "react";
import GameCardWrapper from "../GameCardWrapper/GameCardWrapper";
import style from "./FeaturedCarousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronCircleRight,
	faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const FeaturedCarousel = ({ games }) => {
	const [current, setCurrent] = useState(0);
	const [transitionNext, setTransitionNext] = useState(false);
	const [transitionPrevious, setTransitionPrevious] = useState(false);
	const [slide, setSlide] = useState(null);
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
		setSlide("right");
		setTimeout(() => {
			if (current <= 1) {
				setCurrent(current + 1);
			} else {
				setCurrent(0);
			}
			setTransitionNext(false);
		}, 600);
	};

	const previous = () => {
		setTransitionPrevious(true);
		setSlide("left");
		setTimeout(() => {
			if (current > 0) {
				setCurrent(current - 1);
			} else {
				setCurrent(2);
			}
			setTransitionPrevious(false);
		}, 700);
	};

	return (
		<>
			<div className={style.carousel}>
				<h2 className={style.featured}>Featured</h2>
				<div className={style.btn_container}>
					<FontAwesomeIcon
						onClick={previous}
						className={style.arrow_left}
						icon={faChevronCircleLeft}
					/>
					<div className={style.overflow}>
						<div
							className={
								(transitionNext && style.cards_transitionNext) ||
								(transitionPrevious && style.cards_transitionPrevious) ||
								(slide == "left" && style.cards_left) ||
								(slide == "right" && style.cards_right) ||
								(!slide && style.cards)
							}
						>
							<GameCardWrapper games={nestedFeatured[current]} />
						</div>
					</div>
					<FontAwesomeIcon
						onClick={next}
						className={style.arrow_right}
						icon={faChevronCircleRight}
					/>
				</div>
				<div className={style.dot_container}>
					<div
						onClick={() => {
							setCurrent(0);
						}}
						className={current == 0 ? style.dot_active : style.dot}
					></div>
					<div
						onClick={() => {
							setCurrent(1);
						}}
						className={current == 1 ? style.dot_active : style.dot}
					></div>
					<div
						onClick={() => {
							setCurrent(2);
						}}
						className={current == 2 ? style.dot_active : style.dot}
					></div>
				</div>
			</div>
		</>
	);
};

export default FeaturedCarousel;
