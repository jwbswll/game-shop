import { Link } from "react-router-dom";
import style from "./GameCard.module.scss";

const GameCard = ({ game }) => {
	const { name, image, id, price, platform } = game;
	return (
		<>
			<Link to={`/games/${id}`}>
				<article className={style.card}>
					<div className={style.content}>
						<img
							className={style.img}
							src={image}
							alt={`Box art for ${name}`}
						/>
						<div className={style.text_box}>
							<h3 className={style.text}>{name}</h3>
							<p className={style.platforms}>
								{platform.map((p, i) => {
									if (i === platform.length - 1) {
										return p;
									} else {
										return p + ", ";
									}
								})}
							</p>
						</div>
					</div>
					<div className={style.price_container}>
						<p className={style.price}>${price}</p>
					</div>
				</article>
			</Link>
		</>
	);
};

export default GameCard;
