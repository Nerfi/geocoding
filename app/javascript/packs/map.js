//import places from 'places.js';


const addressInput = document.getElementById('flat_address')
if ( addressInput) {
  const places = require('places.js');
  const palcesAutocomplete = places ({
    container: addressInput
  });
}
