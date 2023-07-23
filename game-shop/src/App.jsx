import { useEffect, useState, useContext, createContext } from "react";
import { getGameSubscription } from "../services/firestore-services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import GamePage from "./Pages/GamePage/GamePage";
import Cart from "./Pages/Cart/Cart";
import { GamesContext } from "./GamesContext";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import RenderAtTop from "./components/RenderAtTop/RenderAtTop";
import Thanks from "./Pages/Thanks/Thanks";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		if (loading) {
			const unsubscribe = getGameSubscription(setGames);
			setLoading(false);
			return () => unsubscribe();
		}
	}, []);
	return (
		<GamesContext.Provider value={{ games, loading }}>
			<BrowserRouter>
				<RenderAtTop>
					<Header />
					<main className={style.content}>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/:id" element={<GamePage />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/thanks" element={<Thanks />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</RenderAtTop>
			</BrowserRouter>
		</GamesContext.Provider>
	);
}

export default App;
