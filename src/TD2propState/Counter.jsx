import React, { useState } from 'react';

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h3>Compteur : {count}</h3>
      <button onClick={() => setCount(count + step)}>+{step}</button>
      <button onClick={() => setCount(count - step)}>-{step}</button>
    </div>
  );
};

export default Counter; // ← ✅ NE PAS oublier

//🧠 Explication :
//useState(initialCount) initialise le compteur.

//Les boutons augmentent/diminuent le compteur en utilisant le step fourni en prop.