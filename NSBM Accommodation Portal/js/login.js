import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA0fPCM1rRqzBBMujNKreJXMBC5SBfSmzE",
    authDomain: "nsbm-accommodation-244ef.firebaseapp.com",
    projectId: "nsbm-accommodation-244ef",
    storageBucket: "nsbm-accommodation-244ef.appspot.com",
    messagingSenderId: "14040491977",
    appId: "1:14040491977:web:90ab1372543415334bea18",
    measurementId: "G-HF4GKNRP90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });