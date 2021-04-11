import { Image, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchResult = ({films = []}) => {



    return films.map(film => {
        console.log({film})
        return (
            <div sm={12} md={6} className="d-flex justify-content-between">
                <Image src={film.Poster} style={{width : "50%", height: "50%"}} fluid thumbnail/>
                  <Col>
                  <strong>{film.Title} ({film.Year})</strong><br/>
                  <Link to={`/Add/${film.imdbID}`} className="nav-link">
                    <Button variant="info">Add movie</Button>
                  </Link>

                  </Col>
               
            </div>
        )
    })
}

export default SearchResult