import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {carousel} from './app/carousel';
import {steps} from './app/steps';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.min.css';
import './style/index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('gkheader', header)
  .component('app', main)
  .component('carousel', carousel)
  .component('pasos', steps);
