import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { AuthProvider } from "./components/utils/Auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
    <Reset />
      <Router>
        <AuthProvider>
          <Routes>
            {/* PUBLIC ROUTE FOR LOGIN */}
            {/* PUBLIC ROUTE SIGNUP */}
            {/* ROUTE FOR "/" WITH REDIRECT TO LOGIN ROUTE */}
            {/* ROUTE TO USER PROFILE ROUTE WITH WILDCARD MATCHER */}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

