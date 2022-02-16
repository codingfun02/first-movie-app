import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(getMovie, []);
  return (
    <>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <article className={styles.movie}>
          <header className={styles.movie__header}>
            <div>
              <h1 className={styles.movie__title}>
                {movie.title} ({movie.year})
              </h1>
            </div>
            <div>
              <h3 className={styles.movie__runtime}>{movie.runtime}분</h3>
              <h3 className={styles["movie__rating-star"]}>
                {"★".repeat(Math.round(movie.rating / 2))}
              </h3>
              <h3 className={styles["movie__rating-number"]}>
                {movie.rating % 1 === 0
                  ? String(movie.rating) + ".0"
                  : movie.rating}
              </h3>
            </div>
          </header>
          <div className={styles.movie__container}>
            <div>
              <img
                className={styles.movie__coverImg}
                src={movie.medium_cover_image}
              />
            </div>
            <div>
              <p className={styles.movie__summary}>{movie.description_full}</p>
              <ul className={styles.movie__genres}>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default Detail;
