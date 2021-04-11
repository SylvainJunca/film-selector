import { useState, useEffect, Fragment } from "react"; 
import axios from "axios";
import { Form, FormControl, InputGroup, Button, Image, Col } from "react-bootstrap";
import SearchResult from "../components/SearchResults";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const Search = () => {

  const [search, setShearch] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [filmsList, setfilmsList] = useState([]);

  const searchURL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`;

  const submitSearch = () => {
    if(!!filmsList.length) {
        setfilmsList([]);
    }
    axios.get(searchURL)
      .then(result => {
          setSearchResult(result);
      })
      .catch(error => {
          console.log("oups !!! this happened : ", error);
      })
  }

  useEffect( () => {
     if(!!searchResult && !!searchResult.data && !!searchResult.data.Search && !!searchResult.data.Search.length) {
        setfilmsList([...filmsList, ...searchResult.data.Search]);
     }
     
  }, [searchResult]);


  const searchMore = () => {
    const page = filmsList.length / 10 + 1;

    axios.get(searchURL + `&page=${page}`)
      .then(result => {
          setSearchResult(result);
      })
      .catch(error => {
          console.log("oups !!! this happened : ", error);
      })
  }

  const hasMoreResult = !!searchResult && !!searchResult.data && searchResult.data.totalResults > filmsList.length;

  return (
      <Fragment>
        <Form onSubmit={(e) => {
            e.preventDefault();
            submitSearch();
        }}>
            <InputGroup>
                <FormControl 
                    placeholder="Search title..."
                    onChange={e => setShearch(e.target.value)}
                />
                <InputGroup.Append>
                    <Button
                        variant="secondary"
                        type="submit"
                    >
                    Search
                    </Button>
                </InputGroup.Append>
            </InputGroup> 
        </Form>
        <SearchResult films={filmsList}/>
        {!!hasMoreResult && <Button variant="white" clasName="d-flex justify-content-center" onClick={() => searchMore()}>Search More</Button> || ""}
      </Fragment>
  )


}

export default Search;