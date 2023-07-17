import { useEffect } from "react";
import { getGames } from "../services/firestore-services";

function App() {
	useEffect(() => {
		getGames()
			.then((data) => console.log(data))
			.catch((e) => console.log(e));
	}, []);

	return <></>;
}

export default App;
