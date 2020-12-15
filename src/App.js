import React, { useContext, useState } from "react";
import { Switch, Route/* , BrowserRouter as Router  */} from "react-router-dom";

import Home from "./components/home";
import Shop from "./components/shop";
import Map from "./components/map";
import Contact from "./components/contact";
import { ShopContext } from "./context/ShopContext";

const App = () => {
  const [shop, setShop] = useState({
    title: "This is shop component",
  });

  const [map, setMap] = useState({
    title: "This is map component",
  });

  const [contact, setContact] = useState({
  });

/*  const value = useContext(Router) */ /* how to use context with hooks. wtf jane <3 */

  return (
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
