import { useState, useEffect, Fragment } from "react"; 
import axios from "axios";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import AnticipationForm from "../components/AnticipationForm";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const AddFilm = ({match, location, history}) => {

  const filmId = match.params.id;

  const [film, setFilm] = useState();


  const searchURL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${filmId}`;

  useEffect( () => {
    axios.get(searchURL)
    .then(result => {
        setFilm(result);
        console.log(result)
    })
    .catch(error => {
        console.log("oups !!! this happened : ", error);
    });
  }, []);

  return (
      <Fragment>
        <Form onSubmit={(e) => {
            e.preventDefault();

        }}>
            <AnticipationForm />
        </Form>
      </Fragment>
  )


}

export default AddFilm;