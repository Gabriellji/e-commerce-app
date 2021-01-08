import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { theme } from "../../../../data/theme";
import mapboxgl from "mapbox-gl";
import { stores } from "./helper/fakeData";
import { textData } from "../../../../data/textData";
import Popup from "./popup/Popup";
import Tab from "./tab/Tab";
import Text from "../../../atoms/text/Text";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const StyledMapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacer};
  margin: auto calc(3 * ${theme.spacer}) calc(3 * ${theme.spacer});
  @media (min-width: ${theme.viewport.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const StyledMapContainer = styled.div`
  width: 80vw;
  height: 80vw;
  margin-bottom: calc(3* ${theme.spacer});
  @media (min-width: ${theme.viewport.tablet}) {
    width: 40%;
    height: 800px
  }
  .mapboxgl-popup-close-button {
    display: none;
  }
`;

const StyledSidebar = styled.div`
  width: 100%;
  height: 800px;
  @media (min-width: ${theme.viewport.tablet}) {
    width: 40%;
  }
`;

const MapBox = (props) => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  const [myMap, setMap] = useState("");

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v10", //'mapbox://styles/mapbox/streets-v11',
      center: [-0.118092, 51.509865],
      zoom: 11.4,
    });

    setMap(map);

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    const mainMarker = new mapboxgl.Marker({
      color: "#ff6347",
    })
      .setLngLat([-0.118092, 51.509865])
      .setPopup(
        new mapboxgl.Popup({ closeOnClick: false }).setHTML(
          `<p style="color: #33A0FF; text-align: center;">${textData.map.here}</p>`
        )
      )
      .addTo(map);

    stores.features.map((store, i) => {
      return (store.properties.key = i);
    });

    map.on("load", function () {
      mainMarker.togglePopup();
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          map.addSource("random-points-data", {
            type: "geojson",
            data: stores,
          });
          map.addLayer({
            id: "random-points-layer",
            type: "symbol",
            source: "random-points-data",
            layout: {
              "icon-image": "custom-marker",
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    map.on("click", "random-points-layer", (e) => {
      if (e.features.length) {
        const feature = e.features[0];
        const popupNode = document.createElement("div");
        ReactDOM.render(<Popup router={props} feature={feature} />, popupNode);
        popUpRef.current
          .setLngLat(feature.geometry.coordinates)
          .setDOMContent(popupNode)
          .addTo(map);
      }
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        zoom: 15,
        essential: true,
      });
    });

    map.on("mouseenter", "random-points-layer", (e) => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    map.on("mouseleave", "random-points-layer", () => {
      map.getCanvas().style.cursor = "";
    });

    return () => map.remove();
  }, []);

  const handleClick = (e) => {
    for (let i = 0; i < stores.features.length; i++) {
      if (e.target.id === "listing-" + stores.features[i].properties.key) {
        const clickedListing = stores.features[i].geometry.coordinates;
        myMap.flyTo({
          center: clickedListing,
          zoom: 15,
          essential: true,
        });

        const feature = stores.features[i];
        const popupNode = document.createElement("div");
        setTimeout(() => {
          ReactDOM.render(
            <Popup router={props} feature={feature} />,
            popupNode
          );
          popUpRef.current
            .setLngLat(feature.geometry.coordinates)
            .setDOMContent(popupNode)
            .addTo(myMap);
        }, 1000);
      }
    }
  };

  return (
    <StyledMapBox>
      <StyledMapContainer ref={mapContainerRef} />
      <StyledSidebar>
        <Text
          color="light"
          size="L"
          align="center"
          text={textData.map.mapBox}
          type="map"
        />
        <div id="listings">
          {stores.features.map((store, i) => {
            const { key, address, city, phone, name } = store.properties;
            return (
              <Tab
                key={i}
                id={key}
                name={name}
                address={address}
                city={city}
                phone={phone}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </StyledSidebar>
    </StyledMapBox>
  );
};

export default MapBox;
