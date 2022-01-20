import React from 'react';
import './Card.scss';

function Card({image, title}) {
  return (
    <div className="card break-inside">
      <img className="card__image" src={image} alt={title} />
      <div className="card__title">
        {title}
      </div>
    </div>
  );
}

export default Card;
