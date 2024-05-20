import ModalMovie from "../ModalMovie/ModalMovie";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function Movie(props) {
  // console.log(props.data);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w185${props.data.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>
            Add Movie To Favorite
          </Button>
        </Card.Body>
      </Card>

      <ModalMovie movie={props.data} location="home" show={show} handleClose={handleClose} />
    </section>
  );
}

export default Movie;