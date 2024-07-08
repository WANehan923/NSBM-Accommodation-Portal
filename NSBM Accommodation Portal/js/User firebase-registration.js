// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA0fPCM1rRqzBBMujNKreJXMBC5SBfSmzE",
    authDomain: "nsbm-accommodation-244ef.firebaseapp.com",
    projectId: "nsbm-accommodation-244ef",
    storageBucket: "nsbm-accommodation-244ef.appspot.com",
    messagingSenderId: "14040491977",
    appId: "1:14040491977:web:90ab1372543415334bea18",
    measurementId: "G-HF4GKNRP90"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Auth service
const auth = firebase.auth();

// Get a reference to Firestore
const db = firebase.firestore();

// Function to handle user registration
function registerUser(email, password, name, mobile, userType) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered successfully
            const user = userCredential.user;
            console.log('User registered:', user);

            // Save user data to Firestore
            db.collection("users").doc(user.uid).set({
                name: name,
                email: email,
                mobile: mobile,
                userType: userType
            })
            .then(() => {
                console.log("User data added to Firestore");
                // Optionally, redirect the user to another page after registration
            })
            .catch((error) => {
                console.error("Error adding user data to Firestore:", error);
            });
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Registration error:', errorMessage);
            // Display error message to the user
            alert(errorMessage);
        });
}

// Listen for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const userType = document.getElementById('user_type').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Register user
    registerUser(email, password, name, mobile, userType);
});
