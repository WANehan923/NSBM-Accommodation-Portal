// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Get a reference to the Firebase Auth service
const auth = getAuth();

// Function to handle user registration
function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log('User registered:', user);
      // You can redirect the user to another page or perform other actions as needed
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Registration error:', errorMessage);
    });
}
