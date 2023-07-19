import { useEffect, useState, useContext, createContext } from "react";
import { getGames } from "../services/firestore-services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import GameListPage from "./Pages/GameListPage/GameListPage";
import GamePage from "./Pages/GamePage/GamePage";
import Cart from "./Pages/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import { GamesContext } from "./GamesContext";

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
		<GamesContext.Provider value={games}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/games" element={<GameListPage />} />
					<Route path="/games/:id" element={<GamePage />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</GamesContext.Provider>
	);
}

export default App;
