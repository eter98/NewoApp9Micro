import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp9MicroSharedModule } from 'app/shared';
import {
  TipoPrepagoConsumoComponent,
  TipoPrepagoConsumoDetailComponent,
  TipoPrepagoConsumoUpdateComponent,
  TipoPrepagoConsumoDeletePopupComponent,
  TipoPrepagoConsumoDeleteDialogComponent,
  tipoPrepagoConsumoRoute,
  tipoPrepagoConsumoPopupRoute
} from './';

const ENTITY_STATES = [...tipoPrepagoConsumoRoute, ...tipoPrepagoConsumoPopupRoute];

@NgModule({
  imports: [NewoApp9MicroSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TipoPrepagoConsumoComponent,
    TipoPrepagoConsumoDetailComponent,
    TipoPrepagoConsumoUpdateComponent,
    TipoPrepagoConsumoDeleteDialogComponent,
    TipoPrepagoConsumoDeletePopupComponent
  ],
  entryComponents: [
    TipoPrepagoConsumoComponent,
    TipoPrepagoConsumoUpdateComponent,
    TipoPrepagoConsumoDeleteDialogComponent,
    TipoPrepagoConsumoDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroTipoPrepagoConsumoModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
