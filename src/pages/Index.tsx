import {
  BrowserRouter as Router,
//   Switch,
  Route,
//   Link
} from "react-router-dom";

import Discover from './Discover';
import Search from './Search';
import Liked from './Liked';
import Drink from "./Drink";

const Pages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Discover} />
            <Route path = "/search" component = {Search} />
            <Route path = "/liked" component = {Liked} />
            <Route path = "/drink/:idDrink" component = {Drink} />
        </Router>
    );
};

export default Pages;