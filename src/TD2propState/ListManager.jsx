import React, { useState } from 'react';

const ListManager = ({ initialItems = [], placeholder = "Ajouter un élément..." }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default ListManager;
/*🧠 Explication :
items est mis à jour en ajoutant newItem saisi dans l’input.

initialItems est utilisé comme valeur initiale de la liste.*/