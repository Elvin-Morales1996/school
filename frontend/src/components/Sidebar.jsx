import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>School Admin</h2>

      <nav className="menu">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/schools">Escuelas</Link>
        <Link to="/alumnos">Alumnos</Link>
        <Link to="/padres">Padres</Link>
        <Link to="/users">Usuarios</Link>
      </nav>
    </div>
  );
};

export default Sidebar;