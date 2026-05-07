import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../context/AuthContext.jsx";
import ThemeSwitcher from "./ThemeSwitcher";

export const NavBar = ({ isSidebarOpen, toggleSidebar }) => {
  const { user, logout } = useAuth();

  const displayName = user?.username || user?.name || "Usuario";

  return (
    <nav className="flex items-center navbar bg-base-300/95 backdrop-blur-sm px-4 fixed top-0 left-0 w-full z-[1000]">
      {toggleSidebar && (
        <button
          onClick={toggleSidebar}
          className="text-2xl mr-2 cursor-pointer"
        >
          {isSidebarOpen ? <FaBars /> : <FaTimes />}
        </button>
      )}

      <div className="ml-2">
        <ThemeSwitcher />
      </div>

      <div className="flex gap-2 ml-auto items-center">
        {user ? (
          <>
            <span className="hidden sm:inline font-bold">
              Hola,{" "}
              {displayName.charAt(0).toUpperCase() +
                displayName.slice(1).toLowerCase()}
            </span>
            <button className="btn btn-ghost btn-primary" onClick={logout}>
              Salir <IoIosLogOut className="text-2xl" />
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-primary">
              Inicio
            </NavLink>
            <NavLink to="/register" className="btn btn-primary">
              Registro
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
