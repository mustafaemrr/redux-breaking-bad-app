import React from 'react';
import { Link } from "react-router-dom";

import './Card.scss';

function Card({image, title, id}) {
  return (
    <div className="card break-inside">
      <Link to={`/char/${id}`}>
        <img className="card__image" src={image} alt={title} />
        <div className="card__title">
          {title}
        </div>
      </Link>
    </div>
  );
}

export default Card;
