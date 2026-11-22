import { createContext, useContext, useState } from "react";
import { signoutRequest } from "../api/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem("auth");
    return saved ? JSON.parse(saved) : null; // { token, user }
  });

  const login = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuth(data);
  };

  const logout = async () => {
    await signoutRequest();
    localStorage.removeItem("auth");
    setAuth(null);
  };

  const value = {
    auth,
    user: auth ? auth.user : null,
    token: auth ? auth.token : null,
    isAdmin: auth ? auth.user.role === "admin" : false,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);