import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SingleFilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  const fetchFilm = () => {
    console.log("fetching book");
    axios
      .get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((response) => {
        console.log(response.data);
        const { data } = response;
        setFilm(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchFilm();
  }, [id]);

  // categories è molti-a-molti: array di oggetti -> mostra i nomi
  const categoriesText = Array.isArray(film.categories)
    ? film.categories
        .map((c) => (typeof c === "string" ? c : c?.title ?? ""))
        .join(", ")
    : typeof film.categories === "object"
    ? film.categories
    : "";

  const directorName =
    typeof film.director === "string"
      ? film.director
      : film.director?.name ?? "";

  return (
    <>
    <div className="py-5 my-5 " style={{minHeight:"55vh"}}>
      <div className="container my-5 d-flex justify-content-center"  >
        <div className="card col-6 text-center py-5">
          <h1>{film.title}</h1>
          <sub className="mb-2">{`${film.duration_time} ${categoriesText}  ${film.release_year}`}</sub>
          <sub></sub>
          <p>{film.description}</p>
          <p>{directorName}</p>
          {console.log(film.categories)}
        </div>
      </div>
      </div>
    </>
  );
}
