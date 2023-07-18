import { useEffect, useState } from "react";
import { getGames } from "../services/firestore-services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import GameListPage from "./Pages/GameListPage/GameListPage";
import GamePage from "./Pages/GamePage/GamePage";
import Cart from "./Pages/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";

function App() {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (loading) {
			console.log("runs");
			getGames()
				.then((gameData) => {
					setGames([...gameData]);
				})
				.catch((e) => console.log(e));
		}
		setLoading(false);
	}, []);
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage games={games} />} />
				<Route path="/games" element={<GameListPage games={games} />} />
				<Route path="/games/:id" element={<GamePage games={games} />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
