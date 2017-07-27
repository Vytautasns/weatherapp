import * as english from './lang/locale-en';
import * as lithuanian from './lang/locale-lt';

export default function language ($translateProvider) {
  'ngInject';

  /*
  * Setup local translations
  */
  $translateProvider
    .translations('en', english.LANGUAGE)
    .translations('lt', lithuanian.LANGUAGE);

   /*
   * For later use with Ajax language loading
   */
  // $translateProvider
  //   .useStaticFilesLoader({
  //     files: [{
  //         prefix: 'lang/locale-',
  //         suffix: '.json'
  //     }]
  // });

/*
  * Translation Provider configuration
 */
  $translateProvider
    .preferredLanguage('en')
    .fallbackLanguage('en')
    .useCookieStorage();
};
