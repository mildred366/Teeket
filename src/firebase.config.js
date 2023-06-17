// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCLvB9MCoErRLgZPXIgfw854-_Z4zDTxy4',
  authDomain: 'teeket-7bfc6.firebaseapp.com',
  projectId: 'teeket-7bfc6',
  storageBucket: 'teeket-7bfc6.appspot.com',
  messagingSenderId: '1091434801385',
  appId: '1:1091434801385:web:4b25f8dcdd73e54e116878',
  measurementId: 'G-G22DKYV00X'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
console.log(analytics)
export const firebaseSetup = getFirestore()
