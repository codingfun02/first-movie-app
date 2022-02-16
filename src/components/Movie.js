import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <div className={styles.movie__column}>
        <Link to={`/movie/${id}`}>
          <img className={styles.movie__coverImg} src={coverImg} />
        </Link>
      </div>
      <div className={styles.movie__column}>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>
            {title} ({year})
          </Link>
        </h2>
        <p className={styles.movie__summary}>{summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
