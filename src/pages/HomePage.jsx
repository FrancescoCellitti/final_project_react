import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import Card from '../components/card';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(import.meta.env.VITE_API_URL);
        if (!cancelled) setFilms(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchFilms();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <div className="container py-4">Caricamento...</div>;

  return (
    <section className="container py-4">
      <h1 className="mb-3">I FILM</h1>
      <div className="row g-3">
        {films.map(film => (
          <Link key={film.id} to={`/films/${film.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="card">
              <h3>{film.title}</h3>
              <p>{film.description}</p>
              {/* ...altri campi... */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
