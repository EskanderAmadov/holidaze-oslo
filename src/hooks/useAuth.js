import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Custom hook for accessing auth context
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
