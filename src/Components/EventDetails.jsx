// src/Components/EventDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getallEvents } from '../services/api'; // 🔄 API Axios

const EventDetails = () => {
  const { name } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getallEvents();
        const foundEvent = response.data.find(e => e.name === name);
        setEvent(foundEvent || null);
      } catch (err) {
        console.error("Erreur de chargement de l'événement");
        setEvent(null);
      }
    };
    fetchEvent();
  }, [name]);

  // 🧯 Si l'événement n'existe pas
  if (!event) return <h2 className="text-danger">❌ Event not found</h2>;

  return (
    <div className="container mt-4">
      <h2>{event.name}</h2>
      <img
        src={`/${event.img}`}
        alt={event.name}
        style={{ maxWidth: '300px' }}
        className="img-fluid rounded"
      />
      <p>{event.description}</p>
      <p><strong>Price:</strong> {event.price} DT</p>
      <p><strong>Tickets:</strong> {event.nbTickets}</p>
      <p><strong>Participants:</strong> {event.nbParticipants}</p>
    </div>
  );
};

export default EventDetails;
