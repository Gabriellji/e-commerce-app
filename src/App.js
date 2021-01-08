import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Shop from "./components/pages/shop";
import Map from "./components/pages/map";
import Contact from "./components/pages/contact";

const App = () => {
  const [shop, setShop] = useState({
    title: "This is shop component",
  });

  const [map, setMap] = useState({
    title: "This is map component",
  });

  const [contact, setContact] = useState(
    {}
  ); /* how to use context with hooks. wtf jane <3 */

  /*  const value = useContext(Router) */ return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/home" render={() => <Home />} />

        <Route
          path="/shop"
          render={(props) => <Shop {...props} title={shop.title} />}
        />
        <Route
          path="/map"
          render={(props) => <Map {...props} title={map.title} />}
        />
        <Route
          path="/contact"
          render={(props) => <Contact {...props} title={contact.title} />}
        />
      </Switch>
  );
};

export default App;
