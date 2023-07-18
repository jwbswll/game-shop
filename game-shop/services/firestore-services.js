import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getGames = async () => {
	const collRef = collection(db, "games");
	const gamesSnapshot = await getDocs(collRef);
	const gamesData = gamesSnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	console.log(gamesData);
	return gamesData;
};
