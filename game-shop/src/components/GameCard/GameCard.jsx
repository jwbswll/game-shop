import { Link } from "react-router-dom";
import style from "./GameCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { changeFavourite } from "../../../services/firestore-services";

const GameCard = ({ game }) => {
	const { name, image, id, price, platform, favourited } = game;

	const handleFavourite = () => {
		changeFavourite(id);
	};
	return (
		<>
			<article className={style.card}>
				<Link to={`/${id}`}>
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
				</Link>
				<div className={style.price_container}>
					<p className={style.price}>${price}</p>
					<FontAwesomeIcon
						className={favourited ? style.favourite_active : style.favourite}
						icon={faHeart}
						onClick={handleFavourite}
					/>
				</div>
			</article>
		</>
	);
};

export default GameCard;
