import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SingleFilmPage(){
    const { id } = useParams()
    const [film, setFilm] = useState({})

    const fetchFilm = () => {
        console.log('fetching book');
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
        .then(response => {
            console.log(response.data)
            const{data} = response;
            setFilm(data);
        })
        .catch(error => {console.error(error)})      
    }

    useEffect(() => {
        fetchFilm()
    }, [id])



    // categories è molti-a-molti: array di oggetti -> mostra i nomi
    const categoriesText = Array.isArray(film.categories)
        ? film.categories.map(c => (typeof c === "string" ? c : c?.title ?? "")).join(", ")
        : (typeof film.categories === 'object' ? film.categories : "")

    const directorName =
        typeof film.director === "string"
            ? film.director
            : film.director?.name ?? ""

return (

   <>
   <div className="container py-5">
    
        <h1>{film.title}</h1>
        <sub>{film.duration_time}</sub>
        <sub>{categoriesText}</sub>
        <sub>{film.realese_year}</sub>
        <p>{film.description}</p>
        <p>{directorName}</p>
        {console.log(film.categories)}

   </div>
    </>
)
}