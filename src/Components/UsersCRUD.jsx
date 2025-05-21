import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersCRUD() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:3002/users";

  // Charger tous les utilisateurs
  const fetchUsers = () => {
    axios.get(API_URL)
      .then(res => {
        setUsers(res.data);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError("Erreur lors du chargement des utilisateurs");
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (editingId) {
      axios.put(`${API_URL}/${editingId}`, form)
        .then(() => {
          fetchUsers();
          setForm({ name: "", email: "" });
          setEditingId(null);
          setError(null);
        })
        .catch(err => {
          console.error(err);
          setError("Erreur lors de la modification de l'utilisateur");
        });
    } else {
      axios.post(API_URL, form)
        .then(() => {
          fetchUsers();
          setForm({ name: "", email: "" });
          setError(null);
        })
        .catch(err => {
          console.error(err);
          setError("Erreur lors de l'ajout de l'utilisateur");
        });
    }
  };

  const handleDelete = id => {
    if (window.confirm("Supprimer cet utilisateur ?")) {
      axios.delete(`${API_URL}/${id}`)
        .then(() => {
          fetchUsers();
          setError(null);
        })
        .catch(err => {
          console.error(err);
          setError("Erreur lors de la suppression de l'utilisateur");
        });
    }
  };

  const handleEdit = user => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id || user._id);
  };

  const cancelEdit = () => {
    setForm({ name: "", email: "" });
    setEditingId(null);
    setError(null);
  };

  return (
    <div className="container mt-4">
      <h2>Gestion des utilisateurs</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
          className="form-control mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="form-control mb-2"
        />

        <button type="submit" className="btn btn-primary me-2">
          {editingId ? "Modifier" : "Ajouter"}
        </button>

        {editingId && (
          <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
            Annuler
          </button>
        )}
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th><th>Nom</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="4" className="text-center">Aucun utilisateur trouvé</td></tr>
          ) : (
            users.map(user => (
              <tr key={user.id || user._id}>
                <td>{user.id || user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(user)}>✏️ Modifier</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id || user._id)}>🗑️ Supprimer</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersCRUD;
