import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../api/authService";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span>Bienvenido, {user?.name}</span>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Navbar;