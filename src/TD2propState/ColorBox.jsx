/* 🎯 Objectif :
Changer dynamiquement la couleur d’un carré avec un bouton.*/
import React, { useState } from 'react';

const ColorBox = ({ initialColor = "#ff0000", colorOptions = ["#00ff00", "#0000ff", "#ffff00"] }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setColor(colorOptions[randomIndex]);
  };

  return (
    <div>
      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
};

export default ColorBox;
 /*🧠 Explication :
useState gère la couleur actuelle.

Un clic change la couleur en une valeur aléatoire parmi colorOptions.*/