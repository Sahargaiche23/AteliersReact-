import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = ({ event, buy, toggleLike }) => {
  return (
    <Card className="shadow-sm rounded border-0 m-2" style={{ width: '100%', maxWidth: '20rem' }}>
      <Card.Img
        variant="top"
        src={event.img}
        alt={event.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-primary fw-bold">
          <Link to={`/events/${event.name}`} className="text-decoration-none text-primary">
            {event.name}
          </Link>
        </Card.Title>
        <Card.Text className="text-muted">{event.description}</Card.Text>

        <div className="mb-2">
          <Badge bg="secondary" className="me-2">
            Price: {event.price} DT
          </Badge>
          <Badge bg="info" className="me-2">
            Tickets: {event.nbTickets}
          </Badge>
          <Badge bg="success">Participants: {event.nbParticipants}</Badge>
        </div>

        <div className="d-grid gap-2 mt-auto">
          <Button
            variant={event.nbTickets === 0 ? 'secondary' : 'primary'}
            disabled={event.nbTickets === 0}
            onClick={() => buy(event.name)}
          >
            {event.nbTickets === 0 ? 'Sold Out' : '🎟️ Book an event'}
          </Button>

          <Button
            variant={event.like ? 'danger' : 'outline-danger'}
            onClick={() => toggleLike(event.name)}
          >
            {event.like ? '💔 Dislike' : '❤️ Like'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;