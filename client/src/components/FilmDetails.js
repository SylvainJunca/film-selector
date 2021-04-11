import { Card, Col, Row, Image } from "react-bootstrap";

const filmInfo = ["Director", "Country", "Language", "Genre", "Actors", "Plot"];


const FilmDetails = ({film}) => {
 
    const { Title, Poster, Year} = film;

  return (
    <Card>
      <Card.Header>
        <h4>{Title} ({Year})</h4>
      </Card.Header>
      <Card.Body>
        <Row>
        <Col xs={12} md={3}>
          <Image src={Poster} fluid/>
        </Col>
       
        <Col xs={12} md={8}>
          <div className="mt-2">
            {filmInfo.map(field => {
              return  <span><strong>{field}: </strong>{film[field]}<br/></span>
            })}
          </div>
        
        </Col>

        </Row>
       
      </Card.Body>

    </Card>
  )
}

export default FilmDetails;