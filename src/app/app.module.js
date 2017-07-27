import './app.scss';
import jquery from 'jquery';
import uikit from 'uikit';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routing from './app.config';
import language from './app-lang.config';
import ngCookies from 'angular-cookies';
import AngularTranslate from 'angular-translate';
import  AngularTranslateStorageCookie from 'angular-translate-storage-cookie';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';

export const AppModule = angular
  .module('app', [
    AngularTranslate,
    ComponentsModule,
    CommonModule,
    ngCookies,
    AngularTranslateStorageCookie,
    uirouter
  ])
  .config(routing)
  .config(language)
  .component('app', AppComponent)
  .name;
