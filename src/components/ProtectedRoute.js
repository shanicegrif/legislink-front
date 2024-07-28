import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  const nav = useNavigate();

  return isAuthenticated ? children : nav("/");
};

export default ProtectedRoute;
