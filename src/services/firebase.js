import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmtc79-yAu12vu9DbCT8JermTEVtUK2PY",
  authDomain: "legislink-416819.firebaseapp.com",
  projectId: "legislink-416819",
  storageBucket: "legislink-416819.appspot.com",
  messagingSenderId: "210498605510",
  appId: "1:210498605510:web:f0ae593c87119a02e4a2c7",
  measurementId: "G-DDJKZYS2EW"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Set persistence
setPersistence(auth, browserSessionPersistence);

auth.useDeviceLanguage();

const googleAuth = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  try {
    //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    signInWithPopup(auth, googleAuth).then((res) => {
      console.log(res);
    });
  } catch (err) {
    console.log(err);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    alert("you've signed out - congrats.");
  } catch (err) {
    console.log(err);
  }
};
