import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../services/api';

function AddEvent() {
  const [event, setEvent] = useState({ name: '', price: '', description: '', nbTickets: '', img: '' });
  const navigate = useNavigate();

  const handleChange = e => setEvent({ ...event, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEvent(event);
    navigate('/events'); // redirection
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input name="nbTickets" type="number" placeholder="Tickets" onChange={handleChange} />
      <input name="img" placeholder="Image" onChange={handleChange} />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default AddEvent;
