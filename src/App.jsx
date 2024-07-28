import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./providers/AuthProvider";
import FoF from "./pages/FoF";
import TestLobby from "./pages/TestLobby";
import Home from "./pages/Home";
import DynamicNav from "./components/DynamicNav";
import Bills from "./pages/Bills";
import Representatives from "./pages/Representatives";
import Settings from "./pages/Settings";
import About from "./pages/About.jsx";
import RepresentativeDetail from "./pages/RepresentativeDetail.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import SignIn from "./pages/SignIn.jsx";
import ProtectedRoute from "./components/ProtectedRoute"; // import the ProtectedRoute component

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <main className="grid-container">
            <DynamicNav />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<SignIn />} />

                {/* Protected Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <TestLobby />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/bills"
                  element={
                    <ProtectedRoute>
                      <Bills />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/representatives"
                  element={
                    <ProtectedRoute>
                      <Representatives />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/representatives/:bioguideID"
                  element={
                    <ProtectedRoute>
                      <RepresentativeDetail />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/help-center"
                  element={
                    <ProtectedRoute>
                      <HelpCenter />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<FoF />} />
              </Routes>
            </div>
          </main>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
