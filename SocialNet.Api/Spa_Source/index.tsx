import * as React from 'react';
import ReactDOM from 'react-dom';
import { Growl } from './libreris/growl';
import { App } from './app/app';

Growl.init();

ReactDOM.render(
  <App/>,
  document.getElementById('wrapper')
)
;