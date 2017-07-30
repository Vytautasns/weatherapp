export class TranslationService {
  constructor($translate, tmhDynamicLocale) {
    'ngInject';
    this.$translate = $translate;
    this.tmhDynamicLocale = tmhDynamicLocale;
  }

  setLanguage(langKey) {
    this.tmhDynamicLocale.set(langKey);
    this.$translate.use(langKey);
  }


}
