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

  let lithuanianLanguage = {
    PARAGRAPH: 'Srsly!!!',
    NAMESPACE: {
      PARAGRAPH: 'And it comes with awesome features!'
    },
    CLICKED_N_TIMES: 'Tu paspaudei {{ n }} kartu'
  };

  $translateProvider
    .translations('en', englishLanguage)
    .translations('lt', lithuanianLanguage);

  $translateProvider
    .fallbackLanguage('en');

  $translateProvider.preferredLanguage('en');
};
