import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEventById, editEvent } from '../services/api'; // ✅ fonction à créer si pas encore faite
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3, { message: "Le nom doit contenir au moins 3 caractères" }),
  price: z.coerce.number().min(1, { message: "Le prix doit être ≥ 1" }).max(1000, { message: "Le prix doit être ≤ 1000" }),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères" }),
  nbTickets: z.coerce.number().min(1, { message: "Le nombre de tickets doit être ≥ 1" }).max(100, { message: "Le nombre de tickets doit être ≤ 100" }),
  img: z.string().url({ message: "L'image doit être une URL valide" }),
});

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    name: '',
    price: '',
    description: '',
    nbTickets: '',
    img: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id); // ✅ récupère l'événement par ID
        setEvent(data);
      } catch (error) {
        console.error("Erreur lors du chargement de l'événement :", error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validatedData = schema.parse(event);
      await editEvent(id, validatedData); // ✅ appel de l'API
      navigate('/events');
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formErrors = {};
        err.errors.forEach((error) => {
          formErrors[error.path[0]] = error.message;
        });
        setErrors(formErrors);
      } else {
        console.error("Erreur lors de la mise à jour :", err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h2>✏️ Modifier un événement</h2>

      <div className="mb-3">
        <label>Nom</label>
        <input
          className="form-control"
          name="name"
          value={event.name}
          onChange={handleChange}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label>Prix</label>
        <input
          className="form-control"
          name="price"
          type="number"
          value={event.price}
          onChange={handleChange}
        />
        {errors.price && <div className="text-danger">{errors.price}</div>}
      </div>

      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={event.description}
          onChange={handleChange}
        />
        {errors.description && <div className="text-danger">{errors.description}</div>}
      </div>

      <div className="mb-3">
        <label>Nombre de tickets</label>
        <input
          className="form-control"
          name="nbTickets"
          type="number"
          value={event.nbTickets}
          onChange={handleChange}
        />
        {errors.nbTickets && <div className="text-danger">{errors.nbTickets}</div>}
      </div>

      <div className="mb-3">
        <label>Image (URL)</label>
        <input
          className="form-control"
          name="img"
          value={event.img}
          onChange={handleChange}
        />
        {errors.img && <div className="text-danger">{errors.img}</div>}
      </div>

      <button type="submit" className="btn btn-primary">Mettre à jour</button>
    </form>
  );
}

export default UpdateEvent;
