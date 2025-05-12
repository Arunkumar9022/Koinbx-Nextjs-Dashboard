import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAdWD77EU1hu1rWIiHmuDTVe3k-U2VBXTI",
  authDomain: "koinbx-dashboard.firebaseapp.com",
  databaseURL: "https://koinbx-dashboard-default-rtdb.firebaseio.com",
  projectId: "koinbx-dashboard",
  storageBucket: "koinbx-dashboard.firebasestorage.app",
  messagingSenderId: "36222451145",
  appId: "1:36222451145:web:5d851f0c77e96a33637c18",
  measurementId: "G-VKJXHXV80J"
};

// i am Initializing the  Firebase over here....///
const app = initializeApp(firebaseConfig);
const database =getDatabase(app)
export {database}
// const analytics = getAnalytics(app);