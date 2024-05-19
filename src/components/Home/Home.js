import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList.js";
function Home() {

  const [movie, setMovie] = useState([]);
  /* 
     
Get the data from server 
  
Use UseEffect to render the function getDataFromServer
Render the movie list
Mapping on the props to send the one movie to Movie component
get The card from react bootstrap in the card put the value that come from Movie component
Render the ModalMovie component and send the data to the component

*/
const getDataFromServer = () => {
 const url = "https://movies-library-89zp.onrender.com/trending";
 axios
   .get(url)
   .then((result) => {
     // console.log(result);
     setMovie(result.data);
   })
   .catch((err) => {
     console.log(err);
   });
};


    useEffect(() => {
      getDataFromServer();
    },[]);

  return (
    <>
      <MovieList movie={movie} />
    </>
  );
}

export default Home;