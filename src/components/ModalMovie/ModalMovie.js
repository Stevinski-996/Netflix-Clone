import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalMovie(props) {
  const sendTheMovieToDB = (movie) => {
    const url = "https://movies-library-89zp.onrender.com/ddMovie";
    const filtereData = {
      title: movie.title,
      poster_path: movie.poster,
      releas_data: movie.releas_data,
      ovierview: movie.ovierview,
      comment: movie.comment
    }
    console.log(movie);
    axios
      .post(url, filtereData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src={`https://image.tmdb.org/t/p/w185${props.movie.data.poster_path}`}
            alt={props.movie.data.image}
          />
        </Modal.Body>
        <Modal.Body>{props.movie.data.title}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              sendTheMovieToDB(props.movie.data);
              props.handleClose();
            }}
          >
            Add to Fav
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalMovie;