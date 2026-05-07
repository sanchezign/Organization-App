// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext.jsx";

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
      // Simulación de login (sin backend)
      const fakeUser = {
        id: Date.now().toString(),
        name: form.email.split("@")[0],
        email: form.email,
        role: "user"
      };
      const fakeToken = "fake-token-" + Date.now();

      login(fakeUser, fakeToken);
      toast.success("Login exitoso!");
      navigate("/home");
    } catch (error) {
      toast.error("Error en el login");
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
