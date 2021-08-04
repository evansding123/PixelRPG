import firebase from 'firebase/app'
import "firebase/auth"
import config from '../firebase.config.js'


const app = firebase.initializeApp({
    apiKey: config.REACT_APP_FIREBASE_API_KEY,
    authDomain: config.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: config.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: config.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
    appId: config.REACT_APP_FIREBASE_APP_ID,
    measurementId: config.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth()
export default app