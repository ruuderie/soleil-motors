import { initializeApp } from "firebase/app";
import {
	getAuth,
	ActionCodeSettings,
	signInWithEmailAndPassword,
	sendSignInLinkToEmail as sendEmailLink,
	signInWithPopup,
	signInWithEmailLink,
	GoogleAuthProvider,
} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	getDocs,
	query,
	where,
	orderBy,
	limit,
	addDoc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCfUQ_dlGxCLmoFkrjNggbpW0fcku2BFwQ",
	authDomain: "soleil-motors.firebaseapp.com",
	projectId: "soleil-motors",
	storageBucket: "soleil-motors.appspot.com",
	messagingSenderId: "415596934648",
	appId: "1:415596934648:web:af5f6414330893e06d120d",
	measurementId: "G-1P6G6SS92S",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	provider.setCustomParameters({
		prompt: "select_account",
	});
	try {
		const result = await signInWithPopup(auth, provider);
		return result.user;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const SendSignInLinkToEmail = (email: string) => {
	return sendEmailLink(auth, email, {
		url: "http://localhost:5173/confirm",
		handleCodeInApp: true,
	}).then(() => {
		return true;
	});
};

export const SignInWithEmail = async (email: string, code: string) => {
	return signInWithEmailLink(auth, email, code)
		.then((result) => {
			console.log(result);
			//setUser(result.user);
			return result.user;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const SignOut = async () => {
	const auth = getAuth();
	try {
		await auth.signOut();
		console.log("Successfully signed out");
	} catch (error) {
		console.error(error);
	}
};

export const CreateUserDocument = async (
	userAuth: any,
	additionalData: any,
) => {
	if (!userAuth) return;
	const userRef = doc(db, "users", userAuth.uid);
	console.log(userRef);
	const snapShot = await getDoc(userRef);

	if (!snapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};
