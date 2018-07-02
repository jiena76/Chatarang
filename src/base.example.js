import firebase from 'firebase/app'
import "firebase/database"
import Rebase from 're-base'

// Initialize Firebase
const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
}

const app = firebase.initializeApp(config)

// "export" so they can imported from other classes as named imports
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

// rebase stuff
const db = app.database()

export default Rebase.createClass(db)