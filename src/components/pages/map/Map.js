import React, { useContext } from "react";
import MapBox from "./mapbox/MapBox";
import Text from "./../../atoms/text/Text";
import Hr from "./../../atoms/hr/Hr";
import MainNavbar from "../../molecules/mainNavbar/MainNavbar";
import MapImage from "../../molecules/images/MapImage";
import Footer from "./../../molecules/footer/Footer";
import { ShopContext } from "./../../../context/ShopContext";
import {textData} from '../../../data/textData'

const Map = (props) => {

  const context = useContext(ShopContext);

  return (
      <>
        <MainNavbar />
        <MapImage />
        <Hr />
        <Text
          color="primary"
          size="M"
          align="center"
          text={textData.map.title}
        />
        <Hr />
        {!context.state.mobileMenu && <MapBox {...props} />}
        <Footer />
      </>
    )
};

export default Map;
