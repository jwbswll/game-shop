import { useEffect, useState, useContext, createContext } from "react";
import { getGames } from "../services/firestore-services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import GameListPage from "./Pages/GameListPage/GameListPage";
import GamePage from "./Pages/GamePage/GamePage";
import Cart from "./Pages/Cart/Cart";
import { GamesContext } from "./GamesContext";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import { CartContext } from "./CartContext";

function App() {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		if (loading) {
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
			<CartContext.Provider value={{ cart, setCart }}>
				<BrowserRouter>
					<Header />
					<main className={style.content}>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/games" element={<GameListPage />} />
							<Route path="/games/:id" element={<GamePage />} />
							<Route path="/cart" element={<Cart />} />
						</Routes>
					</main>
				</BrowserRouter>
			</CartContext.Provider>
		</GamesContext.Provider>
	);
}

export default App;
