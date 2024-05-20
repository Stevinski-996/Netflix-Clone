import Movie from "../Movie/Movie.js";
import './MovieList.css';

function MovieList(props) {
  // console.log(props)
  return (
    <section className="cardSection">
      {props.movie.map((item) => {
        return <Movie data={item} key={item.id} />
      })}
    </section>
  );
}

export default MovieList;