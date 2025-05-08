// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0QeIsksmUn4v_ZFb5Q69EWYZt2yOmfPk",
    authDomain: "my-next-app-e48b6.firebaseapp.com",
    projectId: "my-next-app-e48b6",
    storageBucket: "my-next-app-e48b6.firebasestorage.app",
    messagingSenderId: "265145156812",
    appId: "1:265145156812:web:29936671918867846aee69",
    measurementId: "G-GEVJGW2XBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app