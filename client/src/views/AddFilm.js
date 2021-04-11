import { useState, useEffect, Fragment } from "react"; 
import axios from "axios";
import { Form, Card, Row, Spinner, Button } from "react-bootstrap";
import FilmDetails from "../components/FilmDetails";
import AnticipationForm from "../components/AnticipationForm";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const AddFilm = ({match, location, history}) => {

  const filmId = match.params.id;

  const [film, setFilm] = useState();
  const [loading, setLoading] = useState(true);


  const searchURL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${filmId}`;

  useEffect( () => {
    axios.get(searchURL)
    .then(result => {
        setFilm(result.data);
        setLoading(false);
    })
    .catch(error => {
        console.log("oups !!! this happened : ", error);
    });
  }, []);
  
  if(!!loading) {
    return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
  }

  return (
      <Fragment>
        <Form onSubmit={(e) => {
            e.preventDefault();

        }}>
            <FilmDetails film={film} />
            <Card>
              <Row className="m-2 p-2">
                <AnticipationForm />
              </Row>
              <Button>Add Film</Button>
            </Card>
            
        </Form>
      </Fragment>
  )


}

export default AddFilm;