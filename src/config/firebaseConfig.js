import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBoEsDKLSrqHRfIck-LTk8QDgMnOwHxLjA",
  authDomain: "ninja-react-redux-firebase.firebaseapp.com",
  databaseURL: "https://ninja-react-redux-firebase.firebaseio.com",
  projectId: "ninja-react-redux-firebase",
  storageBucket: "ninja-react-redux-firebase.appspot.com",
  messagingSenderId: "630520406003"
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

const firebaseConfig = firebase
export default firebaseConfig