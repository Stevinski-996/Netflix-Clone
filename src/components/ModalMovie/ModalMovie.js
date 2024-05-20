import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalMovie({ movie, handleClose, show, location, handleShow}) {
  console.log(show)
  const [newComment, setNewComment] = useState("");

  if (!movie) return null; // Don't render until movie data is available

  const sendTheMovieToDB = async () => {
    const url = `https://movies-library-89zp.onrender.com/addMovie`;

    const filteredData = {
      title: movie.title,
      poster_path: movie.poster_path || movie.poster,
      release_date: movie.release_date,
      overview: movie.overview,
      comment: newComment,
    };

    try {
      const response = await axios.post(url, filteredData);
      console.log("Movie added to DB:", response.data);
    } catch (error) {
      console.error("Error adding movie to DB:", error);
    }
  };
 

const handleUpdate = (e) => {
  e.preventDefault();
  const updatedComment = { comment: newComment };

  const url = `${process.env.REACT_APP_URL}/UPDATE/${movie.id}`;
  axios
    .put(url, updatedComment)
    .then((response) => {
      console.log(response);
      movie.handleClose();
    })
    .catch((error) => {
      console.log(error);
    });
};

return (
  <Modal  show={show || handleShow} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{movie?.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path || movie.data.poster_path}`}
        alt={movie.title || 'Movie Poster'}
      />
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="comment">Update Comment</label>
          <input
            type="text"
            className="form-control"
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        {location === "home" ? (
          <Button
            variant="primary"
            onClick={() => {
              sendTheMovieToDB(movie.data);
              handleClose();
            }}
          >
            Add to Fav
          </Button>
        ) : (
          <Button type="submit" variant="primary" >
            Update Comment
          </Button>
        )}
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);
        }

export default ModalMovie;