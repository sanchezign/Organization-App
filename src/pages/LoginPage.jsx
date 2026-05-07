// src/pages/LoginPage.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const apiUrl = import.meta.env.VITE_API_URL;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loginAsGuest } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, form);
      login(res.data.user, res.data.token);
      toast.success("Bienvenido de nuevo!");
      navigate("/home");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error en el login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    toast.success("Entrando como invitado...");
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md p-6 rounded bg-base-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-none bg-base-100 p-3 rounded outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full border-none bg-base-100 p-3 rounded outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full btn btn-primary p-3 rounded cursor-pointer font-medium"
          >
            {isLoading ? "Ingresando..." : "Iniciar sesión"}
          </button>
        </form>

        <div className="divider my-6">O</div>

        <button
          onClick={handleGuestLogin}
          className="w-full btn btn-outline btn-secondary p-3 rounded cursor-pointer font-medium"
        >
          Entrar como Invitado
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
