import { useEffect, useState } from "react";
import { getSchools } from "../api/schoolService";

const Schools = () => {
  const [schools, setSchools] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  const fetchSchools = async () => {
    const data = await getSchools(page);

    setSchools(data.data);
    setPagination(data);
  };

  useEffect(() => {
    fetchSchools();
  }, [page]);

  return (
    <div>
      <h2>Escuelas</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {schools.map((school) => (
            <tr key={school.id}>
              <td>{school.id}</td>
              <td>{school.name}</td>
              <td>{school.address}</td>
              <td>
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINACIÓN */}
      <div className="pagination">
        <button
          disabled={!pagination.prev_page_url}
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>

        <span>
          Página {pagination.current_page} de {pagination.last_page}
        </span>

        <button
          disabled={!pagination.next_page_url}
          onClick={() => setPage(page + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Schools;