import React from 'react';
import '../Style/card.css';

export default function Card({
  title = 'Titolo',
  description = 'Descrizione della card.',
  poster, // URL del poster (opzionale)
}) {
  return (
    <div className="nf-card" tabIndex={0}>
      <div
        className="nf-card__poster"
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      />
      <div className="nf-card__gradient" />

      <div className="nf-card__content">
        <h5 className="nf-card__title">{title}</h5>
        <p className="nf-card__description">{description}</p>
      </div>
    </div>
  );
}