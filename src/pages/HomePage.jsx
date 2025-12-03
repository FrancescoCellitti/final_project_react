import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/card";

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
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="container py-4">Caricamento...</div>;

  return (
    <div className="bg-netflix text-netflix min-vh-100">
      <section className="container py-4">
        <h1 className="mb-3 text-danger">I FILM</h1>
        <div className="row g-5">
          {films.map((film) => (
            <div className="col-12 col-sm-6 col-md-4" key={film.id}>
              <Link
                to={`/films/${film.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  title={film.title || film.name}
                  description={film.overview || film.description || ""}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
