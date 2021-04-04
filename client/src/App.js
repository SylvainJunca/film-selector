import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Search from "./views/SearchFilm";
import AddFilm from "./views/AddFilm";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          {/* <Route exact path={["/", "/films"]} component={FilmsList} /> */}
          <Route exact path="/search" component={Search} />
          <Route exact path="/add/:id" component={AddFilm} />
          {/* <Route path="/films/:id" component={Film} /> */}
        </Switch>
      </div>
    </div>
    
  );
}

export default App;
