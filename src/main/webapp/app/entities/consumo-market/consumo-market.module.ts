import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp9MicroSharedModule } from 'app/shared';
import {
  ConsumoMarketComponent,
  ConsumoMarketDetailComponent,
  ConsumoMarketUpdateComponent,
  ConsumoMarketDeletePopupComponent,
  ConsumoMarketDeleteDialogComponent,
  consumoMarketRoute,
  consumoMarketPopupRoute
} from './';

const ENTITY_STATES = [...consumoMarketRoute, ...consumoMarketPopupRoute];

@NgModule({
  imports: [NewoApp9MicroSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ConsumoMarketComponent,
    ConsumoMarketDetailComponent,
    ConsumoMarketUpdateComponent,
    ConsumoMarketDeleteDialogComponent,
    ConsumoMarketDeletePopupComponent
  ],
  entryComponents: [
    ConsumoMarketComponent,
    ConsumoMarketUpdateComponent,
    ConsumoMarketDeleteDialogComponent,
    ConsumoMarketDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroConsumoMarketModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
