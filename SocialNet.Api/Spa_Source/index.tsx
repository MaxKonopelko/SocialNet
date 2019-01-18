import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app';
import { Growl } from './libreris/growl';

Growl.init();

ReactDOM.render(
  (<App/>),
  document.getElementById('wrapper')
);