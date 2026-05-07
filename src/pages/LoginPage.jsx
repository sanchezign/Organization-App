// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../api/axiosConfig.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/api/auth/login", form);
      const { token, user } = response.data;
      login(user, token);
      toast.success("Login exitoso!");
      navigate("/home");
    } catch (error) {
      const msg = error.response?.data?.message || "Error en el login";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
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
            className="w-full bg-base-100 p-3 rounded outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-base-100 p-3 rounded outline-none focus:ring-2 focus:ring-primary"
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
        <p className="text-center mt-4 text-sm">
          ¿No tenés cuenta?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
