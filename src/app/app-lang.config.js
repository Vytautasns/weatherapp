import '../lang/locale-lt';

export default function language ($translateProvider) {
  'ngInject';

  let englishLanguage = {
    HEADLINE: 'What an awesome module finaly',
    PARAGRAPH: 'Srsly!!!',
    NAMESPACE: {
      PARAGRAPH: 'And it comes with awesome features!'
    },
    CLICKED_N_TIMES: 'You have clicked {{ n }} times'
  };


  $translateProvider
    .translations('en', englishLanguage)
    .translations('lt', englishLanguage);

  $translateProvider
    .fallbackLanguage('en');

  $translateProvider.preferredLanguage('en');

  $translateProvider.useCookieStorage();
};
