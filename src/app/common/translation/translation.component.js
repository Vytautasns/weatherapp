import templateUrl from './translation.html';

export const translationComponent = {
  templateUrl,
  controller: class TranslationComponent {
    constructor(TranslationService) {
      'ngInject';
      this.TranslationService = TranslationService;
    }

    changeLanguage(lang) {
        this.TranslationService.setLanguage(lang);
    }

  }
}
