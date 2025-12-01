import React from 'react';

export default function Card({ title = 'Titolo', description = 'Descrizione della card.' }) {
  return (
    <div className="card bg-dark text-white border-secondary" style={{ maxWidth: 360 }}>
      <div className="card-body">
        <h5 className="card-title mb-2">{title}</h5>
        <p className="card-text text-secondary mb-0">{description}</p>
      </div>
    </div>
  );
}