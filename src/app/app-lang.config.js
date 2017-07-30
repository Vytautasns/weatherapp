import * as english from '../lang/locale-en';
import * as lithuanian from '../lang/locale-lt';

export default function language ($translateProvider, tmhDynamicLocaleProvider) {
  'ngInject';

  /*
  *  Dynamic locale setup
  */
  tmhDynamicLocaleProvider.localeLocationPattern('i18n/angular-locale_{{locale}}.js');
  tmhDynamicLocaleProvider.useCookieStorage();

  /*
  * Setup local translations
  */
  $translateProvider
    .translations('en', english.LANGUAGE)
    .translations('lt', lithuanian.LANGUAGE);

/*
  * Translation Provider configuration
 */
  $translateProvider
    .addInterpolation('$translateMessageFormatInterpolation')
    .useMissingTranslationHandlerLog()
    .useSanitizeValueStrategy('escape')
    .preferredLanguage('lt')
    .fallbackLanguage('en')
    .useCookieStorage();
};
