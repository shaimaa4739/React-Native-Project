
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjYyU3jo-aODrW6xA6MEcMdlpd8Unyi_k",
    authDomain: "firstproject-b5cb1.firebaseapp.com",
    projectId: "firstproject-b5cb1",
    storageBucket: "firstproject-b5cb1.appspot.com",
    messagingSenderId: "1044227215798",
    appId: "1:1044227215798:web:a22473e605480999bd3117",
    measurementId: "G-GM5QS1K843"
};

//   connecting our project to firebase project
let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
// extracting database from firestore in this firebase project
const auth = getAuth(app)
export const db = getFirestore(app)
export { auth };
