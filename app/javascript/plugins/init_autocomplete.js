//este codigo no funciona aqui pero si lo hace cuando
// lo ponemos en map.js? porque?

import places from 'places.js';


const initAutocomplete = () => {
  const addressInput = document.getElementById('flat_address');
  if (addressInput) {
    places({ container: addressInput });
  }
};

export { initAutocomplete };


