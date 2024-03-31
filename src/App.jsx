import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./providers/AuthProvider";
import FoF from "./pages/FoF";
import TestLobby from "./pages/TestLobby";
import Home from "./pages/Home";
import DynamicNav from "./components/DynamicNav";
import Bills from "./pages/Bills";
import Representatives from "./pages/Representatives";
import Footer from "./components/Footer";
import Settings from "./pages/Settings";
import About from "./pages/About.jsx";
import RepresentativeDetail from "./pages/RepresentativeDetail.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import SignIn from "./pages/SignIn.jsx";

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
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/dashboard" element={<TestLobby />} />
                {/* {<Route path='/polls' />} */}
                <Route path="/bills" element={<Bills />} />
                <Route path="/representatives" element={<Representatives />} />
                <Route path="/representatives/:bioguideID" element={<RepresentativeDetail />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help-center" element={<HelpCenter/>} />
                <Route path="*" element={<FoF />} />
                {/* PUBLIC ROUTE FOR LOGIN */}
                {/* ROUTE TO USER PROFILE ROUTE WITH WILDCARD MATCHER */}
              </Routes>
            </div>
            <Footer />
          </main>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
