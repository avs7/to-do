import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC-isB3FAHVf-mWZRv_OEQYw7agnL7epmo',
  authDomain: 'tasks-app-13f30.firebaseapp.com',
  projectId: 'tasks-app-13f30',
  storageBucket: 'tasks-app-13f30.appspot.com',
  messagingSenderId: '889656355762',
  appId: '1:889656355762:web:d3e1424f639e0f76b092ab',
}

//auth
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

//data
export const db = getFirestore(app)
