import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { AuthProvider } from "./components/utils/Auth";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import FoF from "./pages/FoF";
import TestLobby from "./pages/TestLobby";

/**
 * App()
 * ================================
 * top component (except the root) to handle links and other components
 * 
 * @returns {ReactComponentElement}
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <Router>
        {/** AuthProvider is a context hook to hold user info */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signin' element={<SignUp />} />
            <Route path='/lobby' element={<TestLobby />} />
            <Route path="*" element={<FoF />} />
            {/* PUBLIC ROUTE FOR LOGIN */}
            {/* PUBLIC ROUTE SIGNUP */}
            {/* ROUTE FOR "/" WITH REDIRECT TO LOGIN ROUTE */}
            {/* ROUTE TO USER PROFILE ROUTE WITH WILDCARD MATCHER */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

