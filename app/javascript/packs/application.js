import "bootstrap";

import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout! because we import css
// pay attention to this line original: '../plugins/init_mapbox'
import { initMapbox } from '../plugins/init_mapbox';

initMapbox()
