"use client";
import React, { useState } from 'react';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          {/* Contenido del frente de la tarjeta */}
          <h2>Front Side</h2>
        </div>
        <div className="card-back">
          {/* Contenido del dorso de la tarjeta */}
          <h2>Back Side</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
