import React, { useState, useEffect } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

function FavList() {
  const [favMovies, setFavMovies] = useState([]);
  const [showModal, setShow] = useState(false); 
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShow(true); // Show the modal for the selected movie
  };

  const handleFavMovie = () => {
    const url = `${process.env.REACT_APP_URL}/getMovie`;
    axios
      .get(url)
      .then((result) => {
        // console.log(result.data);
        setFavMovies(result.data);
        setSelectedMovie(result.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMovie = (id) => {
    const url = `${process.env.REACT_APP_URL}/DELETE/${id}`;
    axios
      .delete(url)
      .then((result) => {
        // console.log(result);
        handleFavMovie();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleFavMovie();
  }, []);
  return (
    <>
      {favMovies.map((movie) => (
        <React.Fragment key={movie.id}>
          <Card className="h-100" style={{ width: "18rem" }}>
          <Card.Img variant="top"
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Title>{movie.comment}</Card.Title>
              <Button
                variant="primary"
                onClick={() => deleteMovie(movie.id)}
              >
                Delete
              </Button>
            
            <Button variant="primary" onClick={() => handleShow(movie)}>
              UPDATE
            </Button>
            </Card.Body>
          </Card>

          {/* Pass selectedMovie to ModalMovie */}
          {selectedMovie && selectedMovie.id === movie.id && ( 
            <ModalMovie
              movie={selectedMovie}
              location="favList"
              show={showModal}
              handleClose={handleClose}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default FavList;