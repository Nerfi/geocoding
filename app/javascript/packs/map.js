//import places from 'places.js';

const initAutocomplete = () => {
  const addressInput = document.getElementById('flat_address');
  if (addressInput) {
    places({ container: addressInput });
  }
};

export { initAutocomplete };

const addressInput = document.getElementById('flat_address')
if ( addressInput) {
  const places = require('places.js');
  const palcesAutocomplete = places ({
    container: addressInput
  });
}
