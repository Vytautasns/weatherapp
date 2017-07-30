import angular from 'angular';

import language from './app-lang.config';
import appConfig from './app.config';

import { appComponent } from './app.component';
import { commonModule } from './common/common.module';
import { componentsModule } from './components/components.module';

import ngCookies from 'angular-cookies';
import toastr from 'angular-toastr';
import AngularTranslate from 'angular-translate';
import  AngularTranslateStorageCookie from 'angular-translate-storage-cookie';
import AngularTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';
import AngulatDynamicLocale from 'angular-dynamic-locale';
import AngularResource from 'angular-resource';
import MessageFormat from 'messageformat';
import AngularTranslateInterpolationMessageFormat from 'angular-translate-interpolation-messageformat';
import AngularTranslateHandlerLog from 'angular-translate-handler-log';
import './app.scss';

export const appModule = angular
  .module('app', [
    ngCookies,
    toastr,
    AngularTranslate,
    AngulatDynamicLocale,
    commonModule,
    componentsModule,
    AngularResource
  ])
  .component('app', appComponent)
  .config(language)
  .config(appConfig)
  .name;
