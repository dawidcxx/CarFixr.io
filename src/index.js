import './css/app.css';
import './css/bootstrap.css';
import './css/jquery.materialripple.css';

import './css/navigation.css';
import './css/header.css';
import './css/about.css';
import './css/offer.css';
import './css/contact.css';
import './css/footer.css';


import jquery from 'jquery';
import 'imports?jQuery=jquery!./js/bootstrap.js';

import './js/navigation';
import './js/header';
import './js/footer';

// general app scripts
import rippleEffect from './js/jquery.materialripple.js';


rippleEffect('.ripple');
rippleEffect('.green-ripple', {rippleClass: 'green-ripple-wrapper'});