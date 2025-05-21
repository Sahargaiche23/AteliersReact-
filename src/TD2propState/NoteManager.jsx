import React, { useState } from 'react';

const NoteManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    const note = parseFloat(newNote);
    if (!isNaN(note) && note >= 0 && note <= 20) {
      setNotes([...notes, note]);
    }
    setNewNote('');
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average = notes.length ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : 0;

  return (
    <div>
      <input
        type="number"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Entrer une note"
      />
      <button onClick={addNote}>Ajouter</button>
      <ul>
        {notes.map((note, i) => (
          <li key={i}>
            {note} <button onClick={() => removeNote(i)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Moyenne : {average}</p>
    </div>
  );
};

export default NoteManager;
/*🧠 Explication :
Vérifie que la note est entre 0 et 20.

Calcule et affiche la moyenne dynamique.*/