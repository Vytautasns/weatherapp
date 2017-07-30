import { translationComponent } from './translation.component';
import { TranslationService } from './translation.service';

export const translationModule = angular
  .module('common.translate', [])
  .component('translation', translationComponent)
  .service('TranslationService', TranslationService)
  .name;
