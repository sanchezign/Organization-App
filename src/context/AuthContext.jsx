// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar usuario desde localStorage de forma segura
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");

    if (token && userString && userString !== "undefined") {
      try {
        const storedUser = JSON.parse(userString);
        setUser(storedUser);
      } catch (error) {
        console.error("Error al parsear usuario:", error);
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const loginAsGuest = () => {
    const guestUser = {
      id: "guest",
      name: "Invitado",
      email: "guest@organization.app",
      role: "guest"
    };
    const fakeToken = "guest-token-" + Date.now();

    localStorage.setItem("token", fakeToken);
    localStorage.setItem("user", JSON.stringify(guestUser));
    setUser(guestUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, loginAsGuest, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
