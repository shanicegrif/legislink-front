//  this PROVIDER will be responsible for reutrning the
//  functionality of our  FIREBASE SERVICE.
import { useEffect, useState, createContext } from "react";
import { auth } from "../serivces/firebase";
import { postNewUser } from "../api/axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const nav = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });

        /** send user info to our back-end */
        postNewUser(user);

        /** move to dashboard */
        nav("/dashboard");
      } else {
        setUser(null);
      }
    });
  }, []);
  
  return (
    <AuthContext.Provider value={user}>
      <div>{props.children}</div>
    </AuthContext.Provider>
  );
};
