import Movie from "../Movie/Movie.js";
import './MovieList.css';

function MovieList(props) {
  return (
    <section className="cardSection">
      {props.movie.map((item) => {
        return <Movie data={item} />
      })}
    </section>
  );
}

export default MovieList;