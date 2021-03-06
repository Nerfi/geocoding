import mapboxgl from 'mapbox-gl';

// importando yarn package to search on the map
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

//importando autcomplete
import places from 'places.js';


const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
     const markers = JSON.parse(mapElement.dataset.markers);
  markers.forEach((marker) => {
    new mapboxgl.Marker()
      .setLngLat([ marker.lng, marker.lat ])
      //ciopiando lo que aparece en la lecture
      .setPopup(new mapboxgl.Popup({ offset: 25})
      .setHTML(marker.infoWindow.content))
      .addTo(map);
  });
  // con esto conseguimos centrar los markets para que no tengamos nosotros que hacer zoom
  const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { duration: 10, padding: 70, maxZoom: 35 });
};

if (mapElement) {
  // [ ... ]
  fitMapToMarkers(map, markers);
  map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken }));


}
  }


};



export { initMapbox };



