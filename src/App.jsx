import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { AuthProvider } from "./providers/AuthProvider";
import FoF from "./pages/FoF";
import TestLobby from "./pages/TestLobby";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";

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
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/lobby' element={<TestLobby />} />
              <Route path="*" element={<FoF />} />
              {/* PUBLIC ROUTE FOR LOGIN */}
              {/* PUBLIC ROUTE SIGNUP */}
              {/* ROUTE FOR "/" WITH REDIRECT TO LOGIN ROUTE */}
              {/* ROUTE TO USER PROFILE ROUTE WITH WILDCARD MATCHER */}
            </Routes>
          </main>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

