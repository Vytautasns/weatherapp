import { toolbarModule } from './toolbar/toolbar.module';
import { translationModule } from './translation/translation.module';
import { footerModule } from './footer/footer.module';

export const commonModule = angular
  .module('app.common', [
    toolbarModule,
    translationModule,
    footerModule,
  ])
  .name;
