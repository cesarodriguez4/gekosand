import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {carousel} from './app/carousel';
import {steps} from './app/steps';
import {marcas} from './app/marcas';
import {footer} from './app/footer';
import {consulta} from './app/consulta';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import './style/index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('gkheader', header)
  .component('app', main)
  .component('carousel', carousel)
  .component('pasos', steps)
  .component('marcas', marcas)
  .component('gkfooter', footer)
  .component('consulta', consulta);
