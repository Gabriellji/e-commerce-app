import React, { useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import mapboxgl from 'mapbox-gl';

import Marker from './marker';
import fetchFakeData from './api/fetchFakeData';

import './Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-104.9876, 39.7405],
          zoom: 12.5,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        map.on('load', () => {
            // add the data source for new a feature collection with no features
            map.addSource('random-points-data', {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [],
              },
            });
            // now add the layer, and reference the data source above by name
            map.addLayer({
              id: 'random-points-layer',
              source: 'random-points-data',
              type: 'symbol',
              layout: {
                // full list of icons here: https://labs.mapbox.com/maki-icons
                'icon-image': 'bakery-15', // this will put little croissants on our map
                'icon-padding': 0,
                'icon-allow-overlap': true,
              },
            });
          });

          map.on('moveend', async () => {
            // get new center coordinates
            const { lng, lat } = map.getCenter();
            // fetch new data
            const results = await fetchFakeData(lng, lat);
            // update "random-points-data" source with new data
            // all layers that consume the "random-points-data" data source will be updated automatically
            map.getSource('random-points-data').setData(results);
          });
    
        return () => map.remove();
      }, []);


      return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;