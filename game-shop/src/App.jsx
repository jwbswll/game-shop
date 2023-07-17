import { useEffect, useState } from "react";
import { getGames } from "../services/firestore-services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import GameListPage from "./Pages/GameListPage/GameListPage";
import GamePage from "./Pages/GamePage/GamePage";
import Cart from "./Pages/Cart/Cart";

function App() {
	const [games, setGames] = useState(null);
	useEffect(() => {
		getGames()
			.then((gameList) => setGames(gameList))
			.catch((e) => console.log(e));
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/games" element={<GameListPage />} />
				<Route path="/games/:id" element={<GamePage />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
