import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
  collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot,
  serverTimestamp, deleteField, Timestamp, query, orderBy,
} from 'firebase/firestore'
import { getDatabase, ref as rref, set as rset, remove as rremove } from 'firebase/database'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBY0MWs5sjqaXBrJzYIQl7Bs_u161G_XHM',
  authDomain: 'remodel-d9545.firebaseapp.com',
  projectId: 'remodel-d9545',
  storageBucket: 'remodel-d9545.firebasestorage.app',
  messagingSenderId: '731380854038',
  appId: '1:731380854038:web:7214863d550f80673f7437',
  databaseURL: 'https://remodel-d9545-default-rtdb.asia-southeast1.firebasedatabase.app',
}

const app  = initializeApp(FIREBASE_CONFIG)
const auth = getAuth(app)
const db   = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
})
const rtdb = getDatabase(app, FIREBASE_CONFIG.databaseURL)

const DIAGRAMS = 'diagrams'
const diagramsRef = (uid) => collection(db, 'users', uid, DIAGRAMS)
const diagramRef  = (uid, id) => doc(db, 'users', uid, DIAGRAMS, id)

export {
  app, auth, db, rtdb, rref, rset, rremove,
  onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut,
  collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot,
  serverTimestamp, deleteField, Timestamp, query, orderBy,
  diagramsRef, diagramRef,
}
