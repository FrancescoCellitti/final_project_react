import { useState, useEffect } from 'react';
import axios from 'axios';
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
        {films.map((film) => (
          <div key={film.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card title={film.title} description={film.description} />
          </div>
        ))}
      </div>
    </section>
  );
}
