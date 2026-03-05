import React, { useState, useEffect } from 'react';
// import alumnoService from '../api/alumnoService'; // Si tienes el servicio

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState(null);

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = async () => {
    try {
      setLoading(true);
      // Aquí iría la llamada a tu API
      // const response = await alumnoService.getAll();
      // setAlumnos(response.data);
      
      // Datos de ejemplo mientras tanto
      setTimeout(() => {
        setAlumnos([
          { 
            id: 1, 
            nombre: 'Juan', 
            apellido: 'Pérez', 
            email: 'juan.perez@email.com',
            telefono: '555-1234',
            escuela: 'Escuela Primaria Benito Juárez',
            grado: '5°',
            fechaRegistro: '2024-01-15'
          },
          { 
            id: 2, 
            nombre: 'María', 
            apellido: 'García', 
            email: 'maria.garcia@email.com',
            telefono: '555-5678',
            escuela: 'Escuela Secundaria Técnica #45',
            grado: '2°',
            fechaRegistro: '2024-02-20'
          },
          { 
            id: 3, 
            nombre: 'Carlos', 
            apellido: 'López', 
            email: 'carlos.lopez@email.com',
            telefono: '555-9012',
            escuela: 'Preparatoria Federal Lázaro Cárdenas',
            grado: '4°',
            fechaRegistro: '2024-03-10'
          },
        ]);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Error al cargar los alumnos');
      setLoading(false);
    }
  };

  const handleAddAlumno = () => {
    setSelectedAlumno(null);
    setShowForm(true);
  };

  const handleEditAlumno = (alumno) => {
    setSelectedAlumno(alumno);
    setShowForm(true);
  };

  const handleDeleteAlumno = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este alumno?')) {
      try {
        // await alumnoService.delete(id);
        setAlumnos(alumnos.filter(alumno => alumno.id !== id));
        alert('Alumno eliminado correctamente');
      } catch (err) {
        alert('Error al eliminar el alumno');
      }
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedAlumno(null);
  };

  const handleSaveAlumno = (alumnoData) => {
    if (selectedAlumno) {
      // Editar
      setAlumnos(alumnos.map(a => a.id === selectedAlumno.id ? { ...a, ...alumnoData } : a));
    } else {
      // Agregar nuevo
      const newAlumno = {
        ...alumnoData,
        id: alumnos.length + 1,
        fechaRegistro: new Date().toISOString().split('T')[0]
      };
      setAlumnos([...alumnos, newAlumno]);
    }
    setShowForm(false);
    setSelectedAlumno(null);
  };

  if (loading) return <div className="loading">Cargando alumnos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="alumnos-container">
      <div className="header">
        <h1>Gestión de Alumnos</h1>
        <button className="btn-primary" onClick={handleAddAlumno}>
          Agregar Nuevo Alumno
        </button>
      </div>

      {showForm && (
        <AlumnoForm 
          alumno={selectedAlumno}
          onSave={handleSaveAlumno}
          onCancel={handleCloseForm}
        />
      )}

      <div className="alumnos-table-container">
        <table className="alumnos-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Escuela</th>
              <th>Grado</th>
              <th>Fecha Registro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map(alumno => (
              <tr key={alumno.id}>
                <td>{alumno.id}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.email}</td>
                <td>{alumno.telefono}</td>
                <td>{alumno.escuela}</td>
                <td>{alumno.grado}</td>
                <td>{alumno.fechaRegistro}</td>
                <td>
                  <button 
                    className="btn-edit"
                    onClick={() => handleEditAlumno(alumno)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDeleteAlumno(alumno.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .alumnos-container {
          padding: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .btn-primary {
          background: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }
        .btn-primary:hover {
          background: #45a049;
        }
        .alumnos-table-container {
          overflow-x: auto;
        }
        .alumnos-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .alumnos-table th,
        .alumnos-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        .alumnos-table th {
          background: #f5f5f5;
          font-weight: bold;
          color: #333;
        }
        .alumnos-table tr:hover {
          background: #f9f9f9;
        }
        .btn-edit {
          background: #2196F3;
          color: white;
          padding: 5px 10px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          margin-right: 5px;
          font-size: 12px;
        }
        .btn-edit:hover {
          background: #1976D2;
        }
        .btn-delete {
          background: #f44336;
          color: white;
          padding: 5px 10px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-size: 12px;
        }
        .btn-delete:hover {
          background: #d32f2f;
        }
        .loading, .error {
          text-align: center;
          padding: 50px;
          font-size: 18px;
        }
        .error {
          color: #f44336;
        }
      `}</style>
    </div>
  );
};

// Componente de formulario para agregar/editar alumnos
const AlumnoForm = ({ alumno, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: alumno?.nombre || '',
    apellido: alumno?.apellido || '',
    email: alumno?.email || '',
    telefono: alumno?.telefono || '',
    escuela: alumno?.escuela || '',
    grado: alumno?.grado || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>{alumno ? 'Editar Alumno' : 'Agregar Nuevo Alumno'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Escuela:</label>
            <input
              type="text"
              name="escuela"
              value={formData.escuela}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Grado:</label>
            <input
              type="text"
              name="grado"
              value={formData.grado}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-save">
              Guardar
            </button>
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .form-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .form-container {
          background: white;
          padding: 30px;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
        }
        .form-container h2 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #333;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #555;
        }
        .form-group input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        .form-group input:focus {
          outline: none;
          border-color: #4CAF50;
        }
        .form-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .btn-save {
          background: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          flex: 1;
        }
        .btn-save:hover {
          background: #45a049;
        }
        .btn-cancel {
          background: #9e9e9e;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          flex: 1;
        }
        .btn-cancel:hover {
          background: #757575;
        }
      `}</style>
    </div>
  );
};

export default Alumnos;