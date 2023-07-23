import { db } from "../config/firebase";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	onSnapshot,
	setDoc,
	updateDoc,
} from "firebase/firestore";

export const getGameSubscription = (setGames) => {
	const collRef = collection(db, "games");
	const unsubscribe = onSnapshot(collRef, (snapshot) => {
		const gamesData = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		setGames(gamesData);
	});

	return unsubscribe;
};

export const changeFavourite = async (id) => {
	const gameRef = doc(db, "games", id);
	const gameSnapshot = await getDoc(gameRef);
	const isFavourite = gameSnapshot.data().favourited;
	const updateFavourite = await updateDoc(gameRef, {
		favourited: !isFavourite,
	});
};

export const addToCart = async (game, selectedPlatform, quantity, id) => {
	const collRef = collection(db, "cart");
	const docRef = doc(db, "cart", id);
	const gameSnapshot = await getDoc(docRef);
	const oldQuantity = gameSnapshot.data()?.itemQuantity;
	const data = {
		...game,
		selectedPlatform,
		itemQuantity: oldQuantity ? parseInt(oldQuantity) + quantity : quantity,
	};
	setDoc(docRef, data)
		.then()
		.catch((e) => console.log(e));
};
export const changeCartQuantity = async (id, quantity) => {
	const gameRef = doc(db, "cart", id);
	const gameSnapshot = await getDoc(gameRef);
	const updateQuantity = await updateDoc(gameRef, {
		itemQuantity: parseInt(quantity),
	});
};

export const getCartSubscription = (setCart) => {
	const collRef = collection(db, "cart");
	const unsubscribe = onSnapshot(collRef, (snapshot) => {
		const cartData = snapshot.docs
			.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}))
			.filter((doc) => doc.id !== "ignore");
		setCart(cartData);
	});

	return unsubscribe;
};

export const removeFromCart = async (id) => {
	const docRef = doc(db, "cart", id);
	await deleteDoc(docRef);
};

export const emptyCart = async () => {
	const collRef = collection(db, "cart");
	const gamesSnapshot = await getDocs(collRef);
	gamesSnapshot.docs.forEach(async (document) => {
		if (document.id != "ignore") {
			await deleteDoc(doc(db, "cart", document.id));
		}
	});
};
