import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import NavBar from "./NavBar";

function App() {
  const DOG_IMAGES = {
    whiskey: "/whiskey.jpg",
    duke: "/duke.jpg",
    perry: "/perry.jpg",
    tubby: "/tubby.jpg",
  };
  App.defaultProps = {
    dogs: [
      {
        name: "whiskey",
        link: "/dogs/whiskey",
        age: 5,
        src: DOG_IMAGES.whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "duke",
        link: "/dogs/duke",
        age: 3,
        src: DOG_IMAGES.duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs.",
        ],
      },
      {
        name: "perry",
        link: "/dogs/perry",
        age: 4,
        src: DOG_IMAGES.perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain.",
        ],
      },
      {
        name: "tubby",
        link: "/dogs/tubby",
        age: 4,
        src: DOG_IMAGES.tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore.",
        ],
      },
    ],
  };
  return (
    <BrowserRouter>
      <Switch>
        <nav>
          <NavBar data={App.defaultProps.dogs} />
          <Route exact path="/dogs">
            <DogList dogs={App.defaultProps.dogs} />
          </Route>
          <Route path="/dogs/:name">
            <DogDetails dogs={App.defaultProps.dogs} />
          </Route>
        </nav>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
