// src/Components/Events.js
import React, { useEffect, useState } from 'react';
import { Alert, Row, Col, Container } from 'react-bootstrap';
import Event from './Event';
import eventsData from '../events.json';

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [message, setMessage] = useState('');
  const [welcome, setWelcome] = useState(true);

  // Masquer le message de bienvenue après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Fonction pour réserver
  const buy = (name) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.name === name && event.nbTickets > 0
          ? {
              ...event,
              nbTickets: event.nbTickets - 1,
              nbParticipants: event.nbParticipants + 1,
            }
          : event
      )
    );
    setMessage('✅ You have booked an event!');
    setTimeout(() => setMessage(''), 2000);
  };

  // Like / Dislike
  const toggleLike = (name) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.name === name ? { ...event, like: !event.like } : event
      )
    );
  };

  return (
    <Container className="mt-5">
      {/* Titre principal */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">🎉 Club Events</h1>
        <hr className="w-25 mx-auto border-primary" />
      </div>

      {/* Message de bienvenue */}
      {welcome && (
        <Alert variant="success" className="text-center">
          👋 Bienvenue sur la page des événements !
        </Alert>
      )}

      {/* Message de réservation */}
      {message && (
        <Alert variant="info" className="text-center">
          {message}
        </Alert>
      )}

      {/* Liste des événements */}
      <Row className="g-4 justify-content-center">
        {events.map((event) => (
          <Col key={event.name} xs={12} sm={6} md={6} lg={4} className="d-flex justify-content-center">
            <Event event={event} buy={buy} toggleLike={toggleLike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
// /*🧠 Explication :
// events est un tableau d’objets événementiels.