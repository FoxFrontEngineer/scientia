import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBT_EwZB_gVubBg2Ec8mohDW4W7KNqEIi4",
    authDomain: "scientia-4d8a0.firebaseapp.com",
    projectId: "scientia-4d8a0",
    storageBucket: "scientia-4d8a0.appspot.com",
    messagingSenderId: "383983240767",
    appId: "1:383983240767:web:8faf36a174ef005316da8a"
})

export const auth = app.auth()
export default app