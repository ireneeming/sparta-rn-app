import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyCNugdO9M2LNzxSOGHAoAt3QwqZtmhlj1A",
  authDomain: "sparta-study-app-18251.firebaseapp.com",
  databaseURL: "https://sparta-study-app-18251-default-rtdb.firebaseio.com",
  projectId: "sparta-study-app-18251",
  storageBucket: "sparta-study-app-18251.appspot.com",
  messagingSenderId: "1032033907445",
  appId: "1:1032033907445:web:f46dc2a9833f2ebed10bbc",
  measurementId: "G-L6FSEVTWQG",
};

//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
