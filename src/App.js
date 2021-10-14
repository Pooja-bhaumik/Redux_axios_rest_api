import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductListings from "./containers/ProductListings";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListings} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route>404 NOT FOUND</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
