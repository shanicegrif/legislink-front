import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0e-4wEphpGvxUimuU8REX-21Xa1J9Vmk",
  authDomain: "legislink-ae81b.firebaseapp.com",
  projectId: "legislink-ae81b",
  storageBucket: "legislink-ae81b.appspot.com",
  messagingSenderId: "830211220810",
  appId: "1:830211220810:web:8cad661f8d5eecccd1cdb3",
  measurementId: "G-N7BFXH3ZH1",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

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
