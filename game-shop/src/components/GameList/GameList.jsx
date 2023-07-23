import React, { useContext, useState } from "react";
import style from "./GameList.module.scss";
import GameCardWrapper from "../GameCardWrapper/GameCardWrapper";

const GameListPage = ({ games }) => {
	const [platformFilter, setPlatformFilter] = useState("");

	const handleFilterChange = (e) => {
		setPlatformFilter(e.target.value);
	};

	const handleFilter = () => {
		if (platformFilter == "") {
			return games;
		} else if (platformFilter == "favourites") {
			return games.filter((game) => game.favourited);
		} else {
			return games.filter((game) => game.platform.includes(platformFilter));
		}
	};
	const filteredGames = handleFilter();
	return (
		<>
			<section className={style.content}>
				<div className={style.select_title_container}>
					<h2 className={style.title}>
						{platformFilter ? platformFilter : "All Games"}
					</h2>
					<div>
						<label className={style.select_label}>Filter: </label>
						<select
							name="platformFilter"
							id="platformFilter"
							defaultValue={platformFilter}
							onChange={handleFilterChange}
							className={style.platform_select}
						>
							<option value="">All</option>
							<option value="favourites">Favourites</option>
							<option value="PS5">PS5</option>
							<option value="PS4">PS4</option>
							<option value="Xbox One">Xbox One</option>
							<option value="Xbox Series S/X">Xbox Series S/X</option>
							<option value="Windows">Windows</option>
							<option value="macOS">macOS</option>
							<option value="Nintendo Switch">Nintendo Switch</option>
						</select>
					</div>
				</div>
				<div className={style.list}>
					<GameCardWrapper games={filteredGames} />
				</div>
			</section>
		</>
	);
};

export default GameListPage;
